"use client";

import { cn } from "@/lib/utils"; 
import { AnimatedList } from "../magicui/animated-list";
import Image, { StaticImageData } from "next/image";
import Github from "@/app/assets/github.png";
import Slack from "@/app/assets/slack.png";
import GMeet from "@/app/assets/google-meet.png";
import GMail from "@/app/assets/gmail.png";
import Calendar from "@/app/assets/google-calendar.png";
import Facebook from "@/app/assets/facebook.png";

interface Item {
  name: string;
  description: string;
  icon: StaticImageData;
  color: string; 
}

let notifications = [ 
    {
      name: "GitHub Updates",
      description: "Code repository updates and notifications",
      icon: Github,
      color: "#6e5494",
    },
    {
      name: "Slack Messages",
      description: "Team communication and collaboration",
      icon: Slack,
      color: "#722F77",
    },
    {
      name: "Email Activity",
      description: "Important email updates and alerts",
      icon: GMail,
      color: "#FFC107",
    },
    {
      name: "Google Meet Reminders",
      description: "Upcoming meeting reminders and invitations",
      icon: GMeet,
      color: "#1976D2",
    },
    {
      name: "Calendar Events",
      description: "Upcoming events and schedule updates",
      icon: Calendar,
      color: "#34A853",
    },
    {
      name: "Facebook Activity",
      description: "Social media updates and notifications",
      icon: Facebook,
      color: "#4267B2",
    }, 
];
 

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <Image className="w-8 h-8"
          height={'8'}
          width={'8'}
          src={icon} alt="icon" />
          {/* <span className="text-lg">{icon}</span> */}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>  
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedAgentList({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
