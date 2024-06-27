"use client";

import { useState, useEffect, createContext } from 'react';

interface UsePageTransitionProps {
    
}

// const PageTransitionContext = createContext()


export default function PageTransitionProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <>
            {children}
        </>
    )
}