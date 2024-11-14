import { cn } from "@/lib/utils";  
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"; 
import { ToolsFlow } from "./tools-flow";
import { AnimatedAgentList } from "./animated-agents";
import Marquee from "../magicui/marquee";
import ShineBorder from "../magicui/shine-border";
import Image from "next/image";
import Workflow from "@/app/assets/workflow.png";
import { ShimmerHumanLoopButton } from "./ripple-humanloop";
import { BellIcon, CalendarIcon, GlobeIcon } from "lucide-react";
import HumanInLoop from "@/app/assets/human-in-loop.png";


const files = [
  {
    name: "Google Meet",
    body: "Schedule a team meeting for next Friday",
  },
  {
    name: "Github",
    body: "Create a new GitHub repository named 'AI-Assistant'",
  },
  {
    name: "Slack",
    body: "Prepare a report and send via Slack.",
  },  
  {
    name: "Trello",
    body: "Create a Trello board and assign tasks to team.",
  },
  {
    name: "Powerpoint",
    body: "Create a 5-slide presentation on AI trends.",
  },
  {
    name: "Google Sheets",
    body: "Analyze sales data and generate a summary in Google Sheets.",
  },
  {
    name: "Word",
    body: "Draft a project proposal for a new 'Rising Indian Economy'.",
  },
];

const features2 = [
  {
    // Icon: CalendarIcon,
    name: "Built-in User Review",
    description: "Displays review interface for app function before executing",
    href: "/",
    cta: "Learn more",
    background: (      
      <figure
      className={cn(
        "relative  cursor-pointer rounded-2xl p-4", 
        // "[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"     
       )}>
        <div className="flex flex-col overflow-hidden px-10 pb-10">
      <Image alt="HumanInLoop" src={HumanInLoop} className="[mask-image:linear-gradient(to_top,transparent_0%,#000_10%)] items-center absolute opacity-65" />,
      </div>
      </figure>
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-4",
  },
  {
    // Icon: CalendarIcon,
    name: "Instant Decision Making",
    description: "Access real-time data from multiple apps",
    href: "/",
    cta: "Learn more",
    background: (
    <AnimatedAgentList className="absolute  h-[600px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
    className: "lg:col-start-1 lg:col-end-2  lg:row-start-1 lg:row-end-3",
  },
  // {
  //   Icon: GlobeIcon,
  //   name: "Authenticate with 10+ apps",
  //   description: "Supports 100+ languages and counting.",
  //   href: "/",
  //   cta: "Learn more",
  //   // background: <Image alt="" src="" className="absolute -right-20 -top-20 opacity-60" />,
  //   background: (
  //     <AnimatedAgentList className="absolute  h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  //   ),
  //   className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  // }
];

const features = [ 

  { 
    name: "Connect to Your Business Ecosystem",
    description: "Integrate with 10+ business apps to automate daily tasks",
    href: "#",
    cta: "Learn more",
    // className: "col-span-6 lg:col-span-3",
    className: "col-span-6 lg:col-span-2",
    background: (  
      <ToolsFlow className="absolute h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },


  // {
  //   Icon: CalendarIcon,
  //   name: "Save your files",
  //   description: "We automatically save your files as you type.",
  //   className: "col-span-3 lg:col-span-1",
  //   href: "#",
  //   cta: "Learn more",
  //   background: (
  //       <></>
  //   //   <Calendar
  //   //     mode="single"
  //   //     selected={new Date(2022, 4, 11, 0, 0, 0)}
  //   //     className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
  //   //   />
  //   ),
  // },
  { 
    name: "Execute 100+ Actions",
    description: "Type a prompt, our Agents execute the rest",
    href: "#",
    cta: "Learn more",
    className: "col-span-6 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:30s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },

  // { 
  //   name: "Human In Loop",
  //   description: "Maintain control over automated actions",
  //   href: "#",
  //   cta: "Learn more",
  //   className: "col-span-6 lg:col-span-1",
  //   background: ( 
  //       <ShimmerHumanLoopButton />    
  //   ),
  // },

  // { 
  //   name: "Agent Activity",
  //   description: "Real-time updates from Google Meet, Calendar, Facebook, and other apps.",
  //   href: "#",
  //   cta: "Learn more",
  //   className: "col-span-6 lg:col-span-2",
  //   background: (
  //     <AnimatedAgentList className="absolute  h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
  //   ),
  // },
];

export function FeaturesBento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}


export function ExtraFeaturesBento() {
  return (
    <BentoGrid>
      {features2.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
