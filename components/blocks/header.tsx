"use client"; // This makes the component a Client Component
import { RainbowButton } from "@/components/magicui/rainbow-button"; 
import Particles from "../magicui/particles";
import { AnimatedGradientTextDemo } from "./animated-text";
import { WAITINGLIST_FORM } from "@/lib/utils";

export function RainbowButtonDemo() {

  const handleClick = () => {
    window.open(WAITINGLIST_FORM, '_blank'); // Open in a new tab
  };

  return <RainbowButton 
  onClick={handleClick}
  className="font-medium">Join the waiting list</RainbowButton>;
}
 
const Header = () => {
  return (
    <>
     <Particles
        className="absolute inset-0"
        quantity={100}
        ease={100}
        color={'#ffffff'} 
        refresh
      />
      <AnimatedGradientTextDemo /> 
      <h1 className="mt-7 mb-3 bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">         
        Superhuman for Day-to-day business apps
        {/* <br className="hidden md:block" />tasks across business tools. */}
      </h1>

      <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
      {/* Use simple chat prompts to perform tasks across <br className="hidden md:block" />multiple business tools with AI Agents   */}
      {/* Automate tasks with simple chat prompts. <br className="hidden md:block" /> Save time, boost productivity */}
      Schedule a Sales team meet and notify on <br className="hidden md:block" />Slack channel - Agent Handles Rest

      
      </p>
      <RainbowButtonDemo /> 
    </>
  );
};
export default Header;
