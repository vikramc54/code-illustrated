import ThemeIcon from "app/_icons/themeIcon";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full h-[6%] bg-second/[0.75] text-primary backdrop-blur">
            <div className="flex flex-row justify-between items-center mx-auto w-full h-full max-w-6xl">
                <ThemeIcon />
            </div>
        </nav>
    )
}