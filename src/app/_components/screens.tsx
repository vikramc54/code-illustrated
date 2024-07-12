"use client";

import { useState, useEffect, TransitionEventHandler } from 'react';

interface ScreensProps {
    isTransitioning: boolean;
    onTransitionEnd: TransitionEventHandler<HTMLDivElement>;
}

export default function Screens({ isTransitioning, onTransitionEnd }: ScreensProps) {
    const [hexCodes, setHexCodes] = useState<[string, string]>(["#000", "#fff"]);

    useEffect(() => {
        if(isTransitioning) setHexCodes(generateContrastingColors());
    }, [isTransitioning]);

    return (
        <div
            className={`tv-static transition-opacity z-50 fixed w-screen h-screen top-0 left-0 ${isTransitioning ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{
                transitionDuration: `${isTransitioning ? parseInt(process.env.NEXT_PUBLIC_PAGE_TRANSITION_DURATION) / 4 : parseInt(process.env.NEXT_PUBLIC_PAGE_TRANSITION_DURATION) * 3 / 4}ms`,
                backgroundImage: `repeating-conic-gradient(${hexCodes[0]}, ${hexCodes[1]} 0.00085%)`,
                backgroundSize: "200% 200%",
                animation: "tvStatic 0.5s steps(10) infinite",
            }}
            onTransitionEnd={onTransitionEnd}
        />
    );
}

function generateContrastingColors(): [string, string] {
    const hue1 = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 41) + 60;
    const lightness = Math.floor(Math.random() * 41) + 30;
    const hue2 = (hue1 + 180) % 360;

    const color1 = hslToHex(hue1, saturation, lightness);
    const color2 = hslToHex(hue2, saturation, lightness);
    
    return [color1, color2];
}

function hslToHex(h: number, s: number, l: number) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}