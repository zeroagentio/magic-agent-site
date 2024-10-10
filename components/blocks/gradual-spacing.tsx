import GradualSpacing from "@/components/magicui/gradual-spacing";

export function GradualSpacingDemo() {
  return (
    <GradualSpacing
      className="bg-gradient-to-br dark:from-zinc-100 translate-y-[-1rem] animate-fade-in opacity-0 from-black from-30% dark:to-zinc-100/40 to-black/40 bg-clip-text font-display text-center text-4xl font-bold my-7 -tracking-widest text-black dark:text-zinc-100 md:text-7xl md:leading-[5rem]"
      text="Magic UI is the new way pages."
    />
  );
}
