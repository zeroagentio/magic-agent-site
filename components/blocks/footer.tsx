import Image from "next/image";
import Logo from "@/app/assets/logo.svg";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { MailIcon } from "lucide-react";
import { BLOGS, CONTACT, DOCS, PRICING, SHOPIFY, TUTORIALS, USECASES, VIEW_DEMO, WEBPAGES } from "@/lib/utils";
 
// import dynamic from 'next/dynamic';
// import Zeroagent from '@zeroagent/js';
// const Zeroagent = dynamic(() => import('@zeroagent/js'), {
//   ssr: false,
// });
 
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <> 
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <hr className="border-gray-700" />
        <div className="md:flex md:justify-between px-8 p-4 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                className="h-8 w-8 text-primary"
                alt="zeromagic"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Zeroagent
              </span>
            </div>
            <p className="max-w-xs font-medium text-black">
              Next-Gen AI Assistant for Online Stores
              {/* AI Agents for everyday Business apps */}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h4 className="mb-6 text-sm tracking-normal font-bold text-gray-900 uppercase dark:text-white">
                Product
              </h4>
              <ul className="gap-2 grid">
              <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href={SHOPIFY}
                  >
                    Shopify
                  </a>
                </li>

                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href={WEBPAGES}

                  >
                    Web Pages
                  </a>
                </li> 
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href={USECASES}
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href={BLOGS}
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    target="blank"                    
                    href={TUTORIALS}
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    target="blank"                    
                    href={DOCS}
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div> 
            <div>
              <h4 className="mb-6 text-sm tracking-normal font-bold text-gray-900 uppercase dark:text-white">
                Policy
              </h4>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href="terms-conditions/"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href="privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                </li>   
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href="pricing/"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm tracking-normal font-bold text-gray-900 uppercase dark:text-white">
                Connect with Us
              </h4>
              <ul className="gap-2 grid">
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href={CONTACT}
                  >
                    support@zeroagent.io
                  </a>
                </li>
                <li>
                  <a
                    className="cursor-pointer font-semibold text-gray-600 hover:text-gray-800 duration-200 text-sm"
                    href={VIEW_DEMO}
                  >
                    Book Demo
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
              className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://github.com/zeroagentio/"
              target="_blank"
            >
              <GitHubLogoIcon height={20} width={20} />
            </a>
            <a
              rel="noopener"
              title="Mail"
              className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href={CONTACT}
              target="_blank"
            >
              <MailIcon height={20} width={20} />
            </a>
            <a
              rel="noopener"
              title="LinkedIn"
              className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://www.linkedin.com/company/zeroagent/"
              target="_blank"
            >
              <LinkedInLogoIcon height={20} width={20} />
            </a>
            <a
              rel="noopener"
              title="Instagram"
              className="text-gray-800 hover:text-gray-900 dark:hover:text-gray-600 fill-gray-500 hover:fill-gray-900 dark:hover:fill-gray-600"
              href="https://www.instagram.com/zeromagic/"
              target="_blank"
            >
              <InstagramLogoIcon height={20} width={20} />
            </a>
          </div>
          <span className="text-xs md:text-sm text-gray-800 sm:text-center dark:text-gray-400">
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
