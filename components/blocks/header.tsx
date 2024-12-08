"use client"; // This makes the component a Client Component
import { RainbowButton } from "@/components/magicui/rainbow-button"; 
import Particles from "../magicui/particles";
import { AnimatedGradientTextDemo } from "./animated-text";
import { MY_APP } from "@/lib/utils";

export function RainbowButtonDemo() {

  const handleClick = () => {
    window.open(MY_APP, '_blank'); // Open in a new tab
  };

  return <RainbowButton 
  onClick={handleClick}
  className="font-medium">Get Started Free</RainbowButton>;
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
        {/* Automates tasks across multiple business apps with prompt */}
        {/* Superhuman for day-to-day */}
        Next-Gen AI Work Assistant for 
        <br className="hidden md:block" />Day-Day Business Apps
      </h1>

      <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
      {/* Use simple chat prompts to perform tasks across <br className="hidden md:block" />multiple business tools with AI Agents   */}
      {/* Automate tasks with simple chat prompts. <br className="hidden md:block" /> Save time, boost productivity */}
      Automate tasks across multiple apps using AI Agents with simple prompt. "Schedule a Sales team meet and notify on Slack channel" - Agent handles Task
      </p>
      {/* <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-400 md:text-xl text-balance  animate-fade-in opacity-1 [--animation-delay:400ms]">
      Use simple chat prompts to perform tasks across <br className="hidden md:block" />multiple business tools with AI Agents  
      </p> */}
      <RainbowButtonDemo />        
    </>
  );
};
export default Header;
