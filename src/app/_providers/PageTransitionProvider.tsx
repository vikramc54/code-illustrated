"use client";

import Screens from 'app/_components/screens';
import { useState, createContext, useContext } from 'react';

interface UsePageTransitionProps {
    isTransitioning?: boolean;
    setIsTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageTransitionContext = createContext<UsePageTransitionProps|undefined>(undefined);
const defaultContext = { setIsTransitioning: () => {}, isTransitioning: false }

export const usePageTransition = () => useContext(PageTransitionContext) ?? defaultContext

export default function PageTransitionProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    return (
        <PageTransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
            <Screens isTransitioning={isTransitioning} onTransitionEnd={() => setIsTransitioning(false)} />
            {children}
        </PageTransitionContext.Provider>
    )
}