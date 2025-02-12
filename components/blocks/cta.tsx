
'use client';
import { MY_APP } from "@/lib/utils";
import { RainbowButton } from "../magicui/rainbow-button";

export function GetFree() {

  const handleClick = () => {
    window.open(MY_APP, '_blank'); // Open in a new tab
  };

  return <RainbowButton 
  onClick={handleClick}
  className="font-medium">Get Started Free</RainbowButton>;
}

const CTA = () => {
  return (
    <>
      {/* <ScrollTools /> */} 
    <div className="mt-24 mb-16">
      {/* <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-md backdrop-blur-md dark:bg-black/10 lg:size-32">
      <HeartHandshake className="mx-auto size-16 text-black dark:text-white lg:size-24"/>
      </div> */}
      <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
        <p className="text-3xl max-w-2xl leading-loose font-bold lg:text-5xl">
        Ready to Upgrade Your Online Store with AI Agents?
        </p>
        <p className="mt-4 mb-4 font-medium text-xl">
          Start for free now. No credit card required.
        </p>
        <br />
        <GetFree />
      </div>

    </div>
    
    </>
  );
};

export default CTA;
