import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import ThemeProvider from "./_providers/ThemeProvider";
import PageTransitionProvider from "./_providers/PageTransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Illustrated",
  description: "Interactive Tutorials for Popular Computer Science Topics",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en" suppressHydrationWarning>
      <body className={`text-primary ${inter.className}`}>
        <ThemeProvider>
          <PageTransitionProvider>
            <Navbar />
            {children}
          </PageTransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}