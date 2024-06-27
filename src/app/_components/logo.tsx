"use client";

import { useEffect, useState } from "react";
import { Big_Shoulders_Stencil_Display } from "next/font/google";

const bigShouldersFont = Big_Shoulders_Stencil_Display({ subsets: [ "latin" ] })

const initialOpenTime = 500;
const initialTextTime = 1500;
const textTime = 2000;
const prettyTime = 10000;

export default function Logo() {
    const [isLogoOpened, setIsLogoOpened] = useState(false);
    const [isLogoCode, setIsLogoCode] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLogoOpened(true);
        }, initialOpenTime);
        setTimeout(() => {
            setIsLogoCode(true);
        }, initialTextTime);

        const interval = setInterval(() => {
            setIsLogoCode(false);
            setTimeout(() => {
                setIsLogoCode(true);
            }, textTime);
        }, textTime+prettyTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`text-2xl font-semibold ${bigShouldersFont.className} tracking-wider flex flex-row items-center justify-start`}>
            <span className="select-none text-fourth">&#123;</span>
            <span className={`mx-[4px] inline-block transition-[max-width] duration-1000 ease-[cubic-bezier(.16,.81,.37,.98)] ${isLogoOpened ? "max-w-full" : "max-w-0"} overflow-hidden whitespace-nowrap`}>
                <span>code i</span>
                <span className={`inline-block transition-[transform,padding,color] duration-1000 ${isLogoCode && "-skew-x-12 pl-[2px] pr-[1px] text-[#4f9235]"}`}>ll</span>
                <span className={`transition-[color] duration-1000 ${isLogoCode && "text-[#4f9235]"}`}>ustrated</span>
            </span>
            <span className="select-none text-fourth">&#125;</span>
        </span>
    )
}