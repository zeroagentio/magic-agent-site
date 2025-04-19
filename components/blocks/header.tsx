"use client"; // This makes the component a Client Component
import { RainbowButton } from "@/components/magicui/rainbow-button"; 
import Particles from "../magicui/particles";
import { AnimatedGradientTextDemo } from "./animated-text";
import { VIEW_DEMO, MY_APP } from "@/lib/utils";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import ZeroPersona from "@/app/assets/zero-persona.png";
import Image from "next/image";


export function GetFree() {

  const handleClick = () => {
    window.open(MY_APP, '_blank'); // Open in a new tab
  };

  return <RainbowButton 
  onClick={handleClick}
  className="font-medium">Get Started Free</RainbowButton>;
}

export function Demo() {

  const handleClick = () => {
    window.open(VIEW_DEMO, '_blank'); // Open in a new tab
  };

  return   <InteractiveHoverButton
  onClick={handleClick}
  >Book Demo</InteractiveHoverButton>;

}

const Header = () => {
  return (
    <>
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-7  lg:gap-x-8 lg:px-0 lg:pt-16">
    
                <div className="lg:col-span-5">
     <Particles
        className="absolute inset-0"
        quantity={1000}
        ease={100}
        color={'#ffffff'} 
        refresh
      />
      <AnimatedGradientTextDemo />  
      <h1 className="mt-7 mb-3 bg-gradient-to-br  bg-clip-text py-6 text-5xl  font-semibold leading-none tracking-tight text-black text-balance sm:text-6xl md:text-[4.3rem] lg:text-[4.3rem] translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">              
        {/* AI Voice Agents for Sales & Support Powered by Smart AI Employees */}
      {/* AI Voice Agents that sell products, handle customers support & More  */}
      {/* Show Products, Sell More & Support Customers on browsers with AI Employees */}
      {/* Show Products, Boost Sales & Turn Visitors to buyers 
        <br className="hidden md:block" />&nbsp; with  AI Voice Agents */}
        Grow Online Sales & Conversions with AI Agents
        {/* Grow Online Sales & Conversions with AI Voice Agents */}
      </h1>

      <div className="max-w-5xl mx-auto text-center">
      <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-800 md:text-2xl text-balance translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
      {/* AI Employee that offers personalized product recommendations, handles customer support, analyzes store performance & much more.<br /> */}
      The 24/7 AI Employee that boosts sales, handles customer support, analyzes store performance & much more. <br />
      <span className="font-semibold">"Focus on business while AI Handles the rest"</span>
      {/* <span className="font-semibold">"Just like shopping in-store, but online"</span> */}
      </p>
      </div>
      <div className="space-x-2">
      <GetFree />    
      <Demo />    
      </div>
      </div>

        <div className="lg:col-start-6 lg:col-span-2"> 
                          
                          <Image 
                          alt=''
                          className='lg:max-w-[25rem] max-w-[20rem] w-auto h-full'
                         //  width={400}
                         //  height={700}
                          src={ZeroPersona}
                          />
                       </div>

      </div>
      </>
  );
};
export default Header;
