import { RainbowButton } from "@/components/magicui/rainbow-button"; 
import Particles from "../magicui/particles";
import { AnimatedGradientTextDemo } from "./animated-text";

export function RainbowButtonDemo() {
  return <RainbowButton  className="font-medium">Join the waiting list</RainbowButton>;
}
 
const Header = () => {
  return (
    <>
     <Particles
        className="absolute inset-0"
        quantity={30}
        ease={200}
        color={'#ffffff'} 
        refresh
      />
      <AnimatedGradientTextDemo /> 
      <h1 className="mt-7 mb-3 bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-semibold leading-none tracking-tight text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:200ms]">
        Magic UI is the new way
        <br className="hidden md:block" /> to build landing pages.
      </h1>

      <p className="mb-7 text-lg leading-loose font-medium tracking-normal text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
        Beautifully designed, animated components and templates built with
        <br className="hidden md:block" /> Tailwind CSS, React, and Framer
        Motion.
      </p>
      <RainbowButtonDemo /> 
    </>
  );
};
export default Header;
