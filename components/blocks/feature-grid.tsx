import Graph from "@/app/assets/graph.png"; 
import Time from "@/app/assets/time.png";
import Products from "@/app/assets/products.png";
import KnowledgeBase from "@/app/assets/knowledgebase.png";
import Conversations from "@/app/assets/conversations.svg";
import Orders from "@/app/assets/orders.png";

import Image from "next/image";

export default function FeatureGrid() {
    return ( 
        <div className="mt-10 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-lg font-semibold text-gray-600">Make Online Store smarter</h2>
          <p className="mx-auto mt-2 max-w-2xl leading-loose text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl"
          style={{ lineHeight: '1.2' }}>
            AI Store Assistants Here to Help, Always
          {/* Turn Every Customer VIP with AI Store Assistants */}
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-3">
            <div className="relative col-span-2 lg:col-span-1 lg:row-span-2">
              <div className="absolute inset-px bg-white lg:rounded-tl-sm"></div>
              <div className="relative flex h-full flex-col overflow-hidden ">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">
                    Personalised Suggestions
                  </p>
                  <p className="mt-2 max-w-lg text-lg  text-gray-600 max-lg:text-center">
                  Store assistants learns preferences and behavior to suggest products that are just right for your customers
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src={Products}
                      alt="Products"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tl-3xl"></div>
            </div>

            <div className="hidden md:block relative max-lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">24/7 Customer Support</p>
                  <p className="mt-2 max-w-lg text-lg  text-gray-600 max-lg:text-center">
                  Get instant responses and assistance with AI, reducing support costs and response times
                  </p>
                </div>
                
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                    className="h-[min(152px,40cqw)] object-contain"
                    src={Time}
                    alt="Time"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            <div className="relative md:hidden col-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">24/7 Customer Support</p>
                  <p className="mt-2 max-w-lg text-lg  text-gray-600 max-lg:text-center">
                  Get instant responses and assistance with AI, reducing support costs and response times
                  </p>
                </div>
                
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                    className="h-[min(152px,40cqw)] object-contain"
                    src={Time}
                    alt="Time"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>


            <div className="relative max-lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">View Customer Conversations</p>
                  <p className="mt-2 max-w-lg text-lg  text-gray-600 max-lg:text-center">
                  Store owners can easily access and review all conversations between customers and AI assistant.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src={Conversations}
                    alt="Conversations"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-br-3xl"></div>
            </div>
 
            
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-3xl"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">AI Learns from Knowledge Base</p>
                  <p className="mt-2 max-w-2xl text-lg  text-gray-600 max-lg:text-center">
                  Easily keep your AI up to date. It learns from real-time data, so your customers always get the most accurate information
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-5/6 max-lg:max-w-xs"
                    src={KnowledgeBase}
                    alt="KnowledgeBase"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-3xl"></div>
            </div>
 
            
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">
                    All-in-One Store Assistant
                  </p>
                  <p className="mt-2 max-w-lg text-lg  text-gray-600 max-lg:text-center">
                    From adding to cart, order returns & many more - AI assistant does it all for your customers
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src={Orders}
                      alt="Orders"
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-3xl"></div>
              </div>

              <div className="relative col-span-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-xl font-semibold tracking-tight text-gray-950 max-lg:text-center">Data-Driven Insights</p>
                  <p className="mt-2 max-w-2xl text-lg  text-gray-600 max-lg:text-center">
                    Get actionable insights to understand customer needs, preferences, and trends for smarter business decisions
                  </p>
                </div>
 
                <div className="flex flex-1 items-center flex justify-center  max-lg:py-6 lg:pb-2">
                  <Image
                    className="h-[min(152px,40cqw)] w-5/6 object-fit"
                    src={Graph}
                    alt="Graph"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </div>
             

              </div>
          </div> 
    )
  }
  