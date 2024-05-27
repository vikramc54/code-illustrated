"use client"

import { Themes } from "@/types/themes";
import { useEffect, useMemo, useState } from "react";
const isClient = typeof window !== "undefined";

const useTheme = () => {
    const locallyStoredTheme = isClient ? localStorage.getItem("selectedTheme") : "";
    // const systemColorSchemeQuery = isClient ? useMemo(() => window.matchMedia('(prefers-color-scheme: dark)'), []) : null;

    const [selectedTheme, setSelectedTheme] = useState<Themes>(
        // (locallyStoredTheme === "light" || locallyStoredTheme === "dark") ? locallyStoredTheme : systemColorSchemeQuery?.matches ? "dark" : "light"
    );

    useEffect(() => {
        const systemColorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        document.documentElement.setAttribute("data-theme", systemColorSchemeQuery?.matches ? "dark" : "light");

        const handleSystemColorSchemeChange = (e: MediaQueryListEvent) => {
            document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
            setSelectedTheme(e.matches ? "dark" : "light");
        };
        systemColorSchemeQuery?.addEventListener("change", handleSystemColorSchemeChange);
        return () => systemColorSchemeQuery?.removeEventListener("change", handleSystemColorSchemeChange);
    }, []);

    useEffect(() => {
        if(selectedTheme) {
            localStorage.setItem("selectedTheme", selectedTheme);
            document.documentElement.setAttribute("data-theme", selectedTheme);
        }
    }, [selectedTheme]);

    return [selectedTheme, setSelectedTheme] as [Themes, React.Dispatch<React.SetStateAction<Themes>>];
};

export default useTheme;