import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee"; 
import  Github from "@/app/assets/github.png"
import  Calendar from "@/app/assets/google-calendar.png"
import  Meet from "@/app/assets/google-meet.png";
import  Twilio from "@/app/assets/twilio.png";
import Slack from "@/app/assets/slack.png";
import Outlook from "@/app/assets/outlook.png";
import Notion from "@/app/assets/notion.png";
import Docs from "@/app/assets/google-docs.png";
import Sheets from "@/app/assets/google-sheets.png";
import Drive from "@/app/assets/drive.png";
import Mailchimp from "@/app/assets/mailchimp.png";
import Facebook from "@/app/assets/facebook.png";
import Instagram from "@/app/assets/instagram.png";
import Jira from "@/app/assets/jira.png";
import Salesforce from "@/app/assets/salesforce.png";
import Teams from "@/app/assets/teams.png";
import Discord from "@/app/assets/discord.png";
import Canva from "@/app/assets/canva.png";
import Figma from "@/app/assets/figma.png";
import Gmail from "@/app/assets/gmail.png";
import Zoom from "@/app/assets/zoom.png";
import Powerpoint from "@/app/assets/powerpoint.png";
import Word from "@/app/assets/word.png";
import Trello from "@/app/assets/trello.png";

import Image, { StaticImageData } from "next/image";

const reviews = [
  {
    name: "Github", 
    img: Github,
  },
  {
    name: "Powerpoint", 
    img: Powerpoint,
  },
  {
    name: "Word", 
    img: Word,
  }, 
  {
    name: "Calendar", 
    img: Calendar,
  },
  {
    name: "Meet", 
    img: Meet,
  },
  {
    name: "Twilio", 
    img: Twilio,
  },
  {
    name: "Trello", 
    img: Trello,
  },
  {
    name: "Gmail", 
    img: Gmail,
  },
  {
    name: "Zoom", 
    img: Zoom,
  },
  {
    name: "Slack", 
    img: Slack,
  },
  {
    name: "Outlook", 
    img: Outlook,
  },
  {
    name: "Notion", 
    img: Notion,
  },
  {
    name: "Canva", 
    img: Canva,
  }, 
  {
    name: "Figma", 
    img: Figma,
  },
  {
    name: "Sheets", 
    img: Sheets,
  },
  {
    name: "Drive", 
    img: Drive,
  },
  {
    name: "Mailchimp", 
    img: Mailchimp,
  },
  {
    name: "Instagram", 
    img: Instagram,
  },
  {
    name: "Docs", 
    img: Docs,
  },
  {
    name: "Facebook", 
    img: Facebook,
  }, 
  {
    name: "Jira", 
    img: Jira,
  }, 
  {
    name: "Salesforce", 
    img: Salesforce,
  }, 
  {
    name: "Teams", 
    img: Teams,
  }, 
  {
    name: "Discord", 
    img: Discord,
  },  
];

const rowSize = Math.ceil(reviews.length / 3);
const firstRow = reviews.slice(0, rowSize);
const secondRow = reviews.slice(rowSize, 2 * rowSize);
const thirdRow = reviews.slice(2 * rowSize);

const ReviewCard = ({
  img,
  name 
}: {
  img: StaticImageData;
  name : string; 
}) => {
  return (
    <figure
      className={cn(
        "relative size-20 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-gray-800",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="50" height="50" alt={name} src={img} /> 
      </div>
    </figure>
  );
};

export function ScrollTools() {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee className="[--duration:40s]">
        {thirdRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-100% dark:to-background"></div>
    </div>
  );
}
