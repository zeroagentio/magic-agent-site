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
    window.open(MY_APP, "_blank"); // Open in a new tab
  };

  return (
    <RainbowButton onClick={handleClick} className="font-medium">
      Get Started Free
    </RainbowButton>
  );
}

export function Demo() {
  const handleClick = () => {
    window.open(VIEW_DEMO, "_blank"); // Open in a new tab
  };

  return (
    <InteractiveHoverButton onClick={handleClick}>
      Book Demo
    </InteractiveHoverButton>
  );
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
            color={"#ffffff"}
            refresh
          />
          <AnimatedGradientTextDemo />
          <h1 className="mt-7 mb-3 bg-gradient-to-br  bg-clip-text py-6 text-4xl  font-medium leading-none tracking-tight text-black text-balance sm:text-5xl md:text-[4.3rem] lg:text-[4.3rem] translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
            {/* AI Voice Agents for Sales & Support Powered by Smart AI Employees */}
            {/* AI Voice Agents that sell products, handle customers support & More  */}
            {/* Show Products, Sell More & Support Customers on browsers with AI Employees */}
            {/* Show Products, Boost Sales & Turn Visitors to buyers 
        <br className="hidden md:block" />&nbsp; with  AI Voice Agents */}
            {/* Grow Online Sales & Conversions with AI Agents */}

            <span className="inline ">
              <span className=" ">Elevate your</span>

              <div className="relative left-1 sm:-left-1.5 sm:left-0 text-center inline-block px-1.5 mx-0 sm:mx-1.5">
                <div className="relative z-10 inline text-black">
                  Customer
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#ffff66] mb-0.5 h-1/3"></div>
              </div>
              <div className="relative -left-1.5 sm:left-0 text-center inline-block px-1.5 mx-0 sm:mx-1.5">
                <div className="relative z-10 inline text-black">
                  Experience
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#ffff66] mb-0.5 h-1/3"></div>
              </div>
            </span>
            <span className="inline ">
              <span className=" ">on Online Store with</span>
              <div className="relative -left-1.5 sm:left-0 text-center inline-block px-1.5 mx-0 sm:mx-1.5">
                <div className="relative z-10 inline text-black">
                  Conversational AI
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-[#ffff66] mb-0.5 h-1/3"></div> 
              </div>
            </span>

            {/* <span>Elevate your</span>  */}
            {/* <div className="relative -left-1.5 sm:left-0 text-center inline px-1.5 mx-0 sm:mx-1.5"><div className="relative z-10 inline text-black">no matter your stack.</div><div className="absolute bottom-0 left-0 w-full bg-[#e7f256] mb-0.5 h-1/3"></div></div> */}

            {/* <u>Customer Experience</u> on Online Store with Conversational AI */}
            {/* Conversational AI Agents to Improve Customer Experience on Online Store   */}
            {/* Grow Online Sales & Conversions with AI Voice Agents */}
          </h1>

          <div className="max-w-5xl mx-auto text-center">
            <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-800 md:text-2xl text-balance translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
              {/* AI Employee that offers personalized product recommendations, handles customer support, analyzes store performance & much more.<br /> */}
              AI that recommends products, boosts conversions, handles customer
              support, analyzes store performance & much more. <br />
              <span className="font-semibold">
                "Focus on business while AI Handles the rest"
              </span>
              {/* <span className="font-semibold">"Just like shopping in-store, but online"</span> */}
            </p>
          </div>
          <div className="space-x-2">
            <GetFree />
            <Demo />
          </div>
        </div>

        <div className="lg:col-start-6 lg:col-span-2 flex justify-center">
          <Image
            alt=""
            className="lg:max-w-[25rem] max-w-[15rem] w-auto h-full"
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
