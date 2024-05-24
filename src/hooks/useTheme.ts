"use client"

import { Themes } from "@/types/themes";
import { useEffect, useMemo, useState } from "react";

const useTheme = () => {
    const locallyStoredTheme = localStorage.getItem("selectedTheme");
    const systemColorSchemeQuery = useMemo(() => window.matchMedia('(prefers-color-scheme: dark)'), []);

    const [selectedTheme, setSelectedTheme] = useState<Themes>(
        (locallyStoredTheme === "light" || locallyStoredTheme === "dark") ? locallyStoredTheme : systemColorSchemeQuery.matches ? "dark" : "light"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", systemColorSchemeQuery.matches ? "dark" : "light");

        const handleSystemColorSchemeChange = (e: MediaQueryListEvent) => {
            document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
            setSelectedTheme(e.matches ? "dark" : "light");
        };
        systemColorSchemeQuery.addEventListener("change", handleSystemColorSchemeChange);
        return () => systemColorSchemeQuery.removeEventListener("change", handleSystemColorSchemeChange);
    }, []);

    useEffect(() => {
        localStorage.setItem("selectedTheme", selectedTheme);
        document.documentElement.setAttribute("data-theme", selectedTheme);
    }, [selectedTheme]);

    return [selectedTheme, setSelectedTheme] as [Themes, React.Dispatch<React.SetStateAction<Themes>>];
};

export default useTheme;