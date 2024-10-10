import BannerImg from "@/app/assets/magic-agent-banner.png";
import Image from "next/image";

import ShineBorder from "@/components/magicui/shine-border";

export function BannerCard() {
  return (
    <ShineBorder
      className="relative flex mt-20 h-full  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    > 
    <Image 
      className=" object-cover"
      src={BannerImg} alt="magic agent"
       />  
    </ShineBorder>
  );
}
 