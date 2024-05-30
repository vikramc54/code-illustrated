import Link from "next/link";
import ThemeIcon from "./themeIcon";
import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full h-[6%] bg-second/[0.75] text-primary backdrop-blur z-10">
            <div className="flex flex-row justify-between items-center mx-auto w-[90%] h-full max-w-6xl">
                <Link href="/"><Logo/></Link>
                <span className="h-2/3 aspect-square"><ThemeIcon /></span>
            </div>
        </nav>
    )
}