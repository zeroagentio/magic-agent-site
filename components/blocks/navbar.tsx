import { AlignJustifyIcon } from "lucide-react";
import LogoLight from "@/app/assets/logo.svg";
import Image from "next/image";
import { CONTACT, DOCS, TOOLS, MY_APP, BLOGS, USECASES, PRICING } from "@/lib/utils";
const Navbar = () => {
  return (
    <>
      <header className="fixed left-0 top-5 z-50 w-full translate-y-[-1rem] animate-fade-in opacity-1 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="mx-10 md:container md:mx-auto flex h-[4rem] items-center justify-between">
          <div className="md:ml-16 ml-7">
          <a className="text-md flex items-center" href="/">
            <Image 
            src={LogoLight} 
            className="w-8 mr-2"
            alt={"ZeroAgent"}          
            />              
            <span className="self-center text-xl font-bold dark:text-gray-white">
            zeroagent
          </span>
          </a>
          </div>
  
          <div className="ml-auto hidden space-x-6 font-semibold sm:hidden md:flex h-full items-center"> 
            <a
              href={PRICING}
              >
              Pricing
            </a>
            
            <a 
              href={USECASES}
              >
              Use Cases
            </a>
            <a  href={BLOGS}
          >
              Blogs
            </a>
            <a 
              target="_blank"
              href={TOOLS}
              >
              Documentation
            </a>
        
            <a 
              target="_blank"
              href={CONTACT}
              >
              Contact
            </a>
            <span className="text-neutral-500">|</span>
            <a  href={MY_APP}
              target="_blank">
              Log in
            </a>
            <a
              className="rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow-sm h-9 px-4 py-2 mr-6 text-sm"
              href={MY_APP}
              target="_blank"
            >
              Sign Up
            </a>
          </div>
          {/* <button className="ml-6 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <AlignJustifyIcon />
          </button> */}
        </div>
      </header>
    </>
  );
};
export default Navbar;
