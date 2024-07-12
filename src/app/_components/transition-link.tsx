"use client";

import { usePageTransition } from "app/_providers/PageTransitionProvider";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
    children,
    href,
    ...props
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const { setIsTransitioning } = usePageTransition();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        const fullHref = new URL(href, window.location.origin + pathname).pathname;

        if (pathname !== fullHref) {
            setIsTransitioning(true);
            setTimeout(() => {
                router.push(href);
                setIsTransitioning(false);
            }, parseInt(process.env.NEXT_PUBLIC_PAGE_TRANSITION_DURATION)/4);
        }
    };

    return (
        <Link {...props} href={href} onClick={handleTransition}>
            {children}
        </Link>
    );
};