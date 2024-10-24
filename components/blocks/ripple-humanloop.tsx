import ShimmerButton from "@/components/magicui/shimmer-button";

export function ShimmerHumanLoopButton() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Accept Actions
        </span>
      </ShimmerButton>
    </div>
  );
}
