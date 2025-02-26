'use client';
import { AlignJustifyIcon } from "lucide-react";
import LogoLight from "@/app/assets/logo.svg";
import Image from "next/image";
import { CONTACT, DOCS, TOOLS, MY_APP, BLOGS, USECASES, PRICING, VIEW_DEMO, TUTORIALS } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import { Cross1Icon } from "@radix-ui/react-icons";
import FeatureDropdown from "./feature-dropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="fixed left-0 top-5 z-20 w-full translate-y-[-1rem] animate-fade-in opacity-1 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="md:container lg:mx-auto flex h-[4rem] items-center justify-between">
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
  
          <div className="ml-auto hidden space-x-6 font-semibold sm:hidden lg:flex h-full items-center"> 
           
            <a
              href={PRICING}
              >
              Pricing
            </a>
            <FeatureDropdown />
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
              href={DOCS}
              >
              Documentation
            </a>
            <a 
              target="_blank"
              href={TUTORIALS}
              >
              Tutorials
            </a>
            <a 
              target="_blank"
              href={CONTACT}
              >
              Contact
            </a>
            <span className="text-neutral-500">|</span>
            <a
              href={VIEW_DEMO}
              target="_blank"
              >
              Book Demo
            </a>
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
          <button className="mr-4 lg:hidden"
          onClick={() => setOpen(true)}
          >
            <span className="sr-only">Toggle menu</span>
            <AlignJustifyIcon />
          </button>

          <DraggableNavbar 
          setOpen={setOpen} 
          open={open} />
        </div>
      </header>
    </>
  );
};
export default Navbar;

type Props = {
  setOpen: (open: boolean) => void;
  open: boolean;
}

export const DraggableNavbar:React.FC<Props> = ({
  setOpen,
  open
}) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-20">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
    />

    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <DialogPanel
            transition
            className="pointer-events-auto relative w-screen max-w-xs transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
          >
            <TransitionChild>
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-2.5" />
                  <span className="sr-only">Close panel</span>
                  <Cross1Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </TransitionChild>
            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
             
              <div className="relative mt-6 flex-1 px-4 sm:px-6"> 

              <div className="grid grid-rows-auto text-lg font-semibold space-y-3"> 
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
              href={DOCS}
              >
              Documentation
            </a>
        
            <a 
              target="_blank"
              href={CONTACT}
              >
              Contact
            </a> 
            <hr />
            <a  href={MY_APP}
              target="_blank">
              Log in
            </a>
            <a
              className="w-1/3 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow-sm h-9 px-4 py-2 mr-6 text-sm"
              href={MY_APP}
              target="_blank"
            >
              Sign Up
            </a>
          </div>

              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </div>
  </Dialog>
  );
}