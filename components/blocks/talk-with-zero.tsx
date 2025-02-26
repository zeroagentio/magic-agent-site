'use client';
import Zero from "@/app/assets/talk-with-zero-animation.gif";
import Image from "next/image";
import { RainbowButton } from "../magicui/rainbow-button";
import { ArrowRightIcon } from "lucide-react";
import { AI_MANAGER } from "@/lib/utils";

const THUMBNAIL = "https://startup-template-sage.vercel.app/hero-light.png"

const TalkWithZero = () => {
    return (
        <div className="mt-10 mx-auto text-start max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* <h3 className="text-base/7 font-semibold text-gray-600">AI Store Manager</h3> */}
        <h2 className="mt-2 max-w-lg text-balance  text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Meet Zero, Your AI Store Manager
        </h2>
        <p className="mt-4 w-full lg:w-3/5 line-clamp-3 text-xl font-medium text-gray-600">AI Store Manager handles orders, tracks inventory, and provide insights into customer activity & store performance, so you don't have to.
        </p>
        <br />
        <RainbowButton 
  onClick={() => {
    window.open(AI_MANAGER, '_blank');
  }}
  className="flex items-center font-medium">Explore Now <ArrowRightIcon width={20} className='pl-1' /></RainbowButton>
        <div
                className="relative flex mt-10 h-full  w-full flex-col items-center justify-center overflow-hidden rounded-2xl p-2 border bg-neutral-100 md:shadow-xl" 
              > 
               <div className="relative">
                  
                    <Image                    
                      className="dark:hidden rounded-xl block"    
                      src={Zero}
                      alt="talk zero"
                    />
                    <Image
                      className="hidden rounded-xl dark:block"  
                      src={Zero}
                      alt="talk zero"
                    />
                  </div>
              </div>


        </div>
    );
}

export default TalkWithZero;