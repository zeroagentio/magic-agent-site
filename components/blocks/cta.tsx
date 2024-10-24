import { ChevronRight, HeartHandshake } from "lucide-react";
import { ScrollTools } from "./scroll-tools";
import { WAITINGLIST_FORM } from "@/lib/utils";

const CTA = () => {
  return (
    <>
      <ScrollTools />
    <div className="-mt-24 mb-16">
      <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
      <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24"/>
      </div>
      <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
        <h1 className="text-3xl font-bold lg:text-4xl">
          AI Agents that Integrate & Automate
        </h1>
        <p className="mt-2">
          Start your free trial now. No credit card required.
        </p>
        <a
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6"
          href={WAITINGLIST_FORM}
          target="_blank"
        >
          Join the waiting list 
        <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </a>
      </div>

    </div>
    
    </>
  );
};

export default CTA;
