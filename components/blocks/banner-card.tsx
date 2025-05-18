import BannerImg from "@/app/assets/magic-agent-banner.png";
import Image from "next/image";

import ShineBorder from "@/components/magicui/shine-border";
import { HeroVideoDialogDemo } from "./hero-video";

export function BannerCard() {
  return (
    <div
      className="relative flex mt-10 h-full  w-full flex-col items-center justify-center overflow-hidden rounded-2xl p-2 border bg-neutral-100 md:shadow-xl" 
    > 
    <HeroVideoDialogDemo />
    </div>
  );
}
 