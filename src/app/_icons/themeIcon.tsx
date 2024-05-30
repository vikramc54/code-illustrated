"use client"

import { useTheme } from "app/_providers/ThemeProvider";

const ThemeIcon = () => {
    const {selectedTheme, setSelectedTheme} = useTheme();

    if(!selectedTheme) return null;
    return (
        <svg
            className="w-full h-full cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            onClick={() => setSelectedTheme(selectedTheme === "dark" ? "light" : "dark")}
        >
            <title>{selectedTheme === "light" ? "Switch to dark mode" : "Switch to light mode"}</title>
            <g>
                <defs>
                    {/* Earth covering moon */}
                    <mask id="earth">
                        <rect width="100%" height="100%" fill="white" />
                        <circle
                            className={`transition-transform duration-700 dark:rotate-0 -rotate-45`}
                            cx="33"
                            cy="17"
                            r="15"
                            fill="black"
                        />
                    </mask>
                </defs>
                {/* Main circle for sun and moon */}
                <circle
                    className="transition-[r] duration-700 fill-primary"
                    cx="25"
                    cy="25"
                    r={selectedTheme === "light" ? "10" : "15"}
                    mask="url(#earth)"
                />
            </g>

            {/* 8 circles around the sun */}
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "25" : "25"}
                cy={selectedTheme === "light" ? "10" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "35.607" : "25"}
                cy={selectedTheme === "light" ? "14.393" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "40" : "25"}
                cy={selectedTheme === "light" ? "25" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "35.607" : "25"}
                cy={selectedTheme === "light" ? "35.607" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "25" : "25"}
                cy={selectedTheme === "light" ? "40" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "14.393" : "25"}
                cy={selectedTheme === "light" ? "35.607" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "10" : "25"}
                cy={selectedTheme === "light" ? "25" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
            <circle
                className="transition-[cx,cy,r] duration-700 ease-[cubic-bezier(.38,1.13,.73,1.11)] fill-primary"
                cx={selectedTheme === "light" ? "14.393" : "25"}
                cy={selectedTheme === "light" ? "14.393" : "25"}
                r={selectedTheme === "light" ? "2.5" : "0"}
            />
        </svg>
    );
}
 
export default ThemeIcon;