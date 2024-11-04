import Image from "next/image";
import Logo from "@/app/assets/logo.svg";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { CONTACT, DOCS } from "@/lib/utils";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                className="h-8 w-8 text-primary"
                alt="zeromagic"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                ZeroAgent
              </span>
            </div>
            <p className="max-w-xs text-gray-200">
              AI Agents for Business Tools
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                Product
              </h2>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    target="blank"                    
                    href={DOCS}
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="#"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div> 
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                Policy
              </h2>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="terms-conditions/"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href="privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                </li>   
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium text-gray-900 uppercase dark:text-white">
                Connect with Us
              </h2>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer text-gray-400 hover:text-gray-200 duration-200 font-[450] text-sm"
                    href={CONTACT}
                  >
                    support@zeroagent.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex sm:items-center sm:justify-between rounded-md border-neutral-700/20 py-4 px-8 gap-2">
          <div className="flex space-x-5 sm:justify-center sm:mt-0">
            <a
              rel="noopener"
              title="Github"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://github.com/zeroagentio/"
              target="_blank"
            >
              <GitHubLogoIcon height={20} width={20} />
            </a>
            <a
              rel="noopener"
              title="Mail"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href={CONTACT}
              target="_blank"
            >
              <MailIcon height={20} width={20} />
            </a>
            <a
              rel="noopener"
              title="LinkedIn"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://www.linkedin.com/company/zeroagent/"
              target="_blank"
            >
              <LinkedInLogoIcon height={20} width={20} />
            </a>
            <a
              rel="noopener"
              title="Instagram"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://www.instagram.com/zeromagic/"
              target="_blank"
            >
              <InstagramLogoIcon height={20} width={20} />
            </a>
          </div>
          <span className="text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © {currentYear}{" "}
            <a className="cursor-pointer" href="/">
              Zeromagic Labs Pvt. Ltd
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
