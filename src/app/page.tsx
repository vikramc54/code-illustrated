import { TransitionLink } from "./_components/transition-link";

export default function Home() {
  return (
    <div className="relative bg-first w-full h-full flex items-center justify-center">
      <TransitionLink href="/tools/complexity-graph">GO TO GRAPHS</TransitionLink>
    </div>
  );
}
