import { AlignJustifyIcon } from "lucide-react";
import LogoLight from "@/app/assets/logo.svg";
import Image from "next/image";
import { WAITINGLIST_FORM } from "@/lib/utils";
const Navbar = () => {
  return (
    <>
      <header className="fixed left-0 top-3 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-1 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container mx-auto flex h-[4rem] items-center justify-between">
          <a className="text-md flex items-center" href="/">
            <Image 
            src={LogoLight} 
            className="w-8 mr-2"
            alt={"ZeroAgent"}          
            />              
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-gray-white">
            ZeroAgent
          </span>
          </a>
          <div className="ml-auto flex h-full items-center">
            <a className="mr-6 text-sm" href={WAITINGLIST_FORM}
              target="_blank">
              Log in
            </a>
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 mr-6 text-sm"
              href={WAITINGLIST_FORM}
              target="_blank"
            >
              Sign Up
            </a>
          </div>
          <button className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <AlignJustifyIcon />
          </button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
