import { ChevronRight } from "lucide-react";

import { cn, WAITINGLIST_FORM } from "@/lib/utils"; 
import AnimatedShinyText from "../magicui/animated-shiny-text";

export async function AnimatedGradientTextDemo() {

    const handleClick = () => {
    window.open(WAITINGLIST_FORM, '_blank'); // Open in a new tab
  };

  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-gray-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
        onClick={handleClick}
      >
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-black hover:duration-300">
          <span>✨ Future of Online Shopping is here</span>  
        </AnimatedShinyText>
        </div>  
    </div>
  );
}
