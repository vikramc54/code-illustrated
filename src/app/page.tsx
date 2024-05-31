import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-first w-full h-full flex items-center justify-center">
      <Link href="/colour-scheme">GO TO COLOURS</Link>
    </div>
  );
}
