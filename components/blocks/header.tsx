"use client"; // This makes the component a Client Component
import { RainbowButton } from "@/components/magicui/rainbow-button"; 
import Particles from "../magicui/particles";
import { AnimatedGradientTextDemo } from "./animated-text";
import { VIEW_DEMO, MY_APP } from "@/lib/utils";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
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
     <Particles
        className="absolute inset-0"
        quantity={100}
        ease={100}
        color={'#ffffff'} 
        refresh
      />
      <AnimatedGradientTextDemo />  
      <h1 className="mt-7 mb-3 bg-gradient-to-br  bg-clip-text py-6 text-5xl  font-semibold leading-none tracking-tight text-black text-balance sm:text-6xl md:text-7xl lg:text-7xl translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">              
        Next-Gen AI Shopping
        <br className="hidden md:block" />&nbsp;Assistant for Online Stores
      </h1>

      <div className="max-w-5xl mx-auto text-center">
      <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-800 md:text-2xl text-balance translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
      AI Agent offers personalized product recommendations, handles orders, answers query & more for customers.<br />
      <span className="font-semibold">"Just like shopping in-store, but online"</span>
      </p>
      </div>
      <div className="space-x-2">
      <GetFree />    
      <Demo />    
      </div>
      </>
  );
};
export default Header;
