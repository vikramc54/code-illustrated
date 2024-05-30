'use client'

import { Themes } from '@/types/themes';
import { useState, useEffect, createContext, useContext, } from 'react';

interface UseThemeProps {
    setSelectedTheme: React.Dispatch<React.SetStateAction<Themes|undefined>>
    selectedTheme?: Themes|undefined
}

const ThemeContext = createContext<UseThemeProps|undefined>(undefined);
const defaultContext = { setSelectedTheme: () => {}, selectedTheme: undefined as Themes|undefined }

export const useTheme = () => useContext(ThemeContext) ?? defaultContext

export default function ThemeProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const context = useContext(ThemeContext);
    const [selectedTheme, setSelectedTheme] = useState<Themes|undefined>(undefined);

    useEffect(() => {
        const locallyStoredTheme = localStorage.getItem("theme");
        const systemColorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const theme = locallyStoredTheme ?? systemColorSchemeQuery.matches ? "dark" : "light";
        setSelectedTheme(theme);

        const handleSystemColorSchemeChange = (e: MediaQueryListEvent) => {
            setSelectedTheme(e.matches ? "dark" : "light");
        };
        const handleLocalStorageChange = (e: StorageEvent) => {
            if(e.key !== "theme") return;
            setSelectedTheme(e.newValue as Themes || "light");
        };

        window.addEventListener("storage", handleLocalStorageChange);
        systemColorSchemeQuery?.addEventListener("change", handleSystemColorSchemeChange);
        return () => {
            window.removeEventListener("storage", handleLocalStorageChange);
            systemColorSchemeQuery?.removeEventListener("change", handleSystemColorSchemeChange);
        };
    }, []);

    useEffect(() => {
        if(!selectedTheme) return;
        localStorage.setItem("theme", selectedTheme);
        if(document.documentElement.getAttribute("data-theme") !== selectedTheme) document.documentElement.setAttribute("data-theme", selectedTheme);
    }, [selectedTheme]);

    if (context) return children
    return (
        <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
            <script dangerouslySetInnerHTML={{ __html: `(${script.toString()})()` }}/>
            {children}
        </ThemeContext.Provider>
    );
}

const script = () => {
    const locallyStoredTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const theme = locallyStoredTheme ? locallyStoredTheme : systemTheme ? systemTheme : "light";
    document.documentElement.setAttribute("data-theme", theme);
}