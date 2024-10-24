import Workflow from "@/app/assets/workflow.png";
import Image from "next/image";

import ShineBorder from "@/components/magicui/shine-border";

export function WorkflowCard() {
  return (
    <ShineBorder
      className="relative flex mt-10 h-full  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
      // color={["#A07CFE" ]}
    > 
    <Image 
      className=" object-cover"
      width={0}
      height={0}
      src={Workflow}  
      alt="magic agent" 
       />  
    </ShineBorder>
  );
}
 