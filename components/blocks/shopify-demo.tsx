import HeroVideoDialog from "../magicui/hero-video-dialog";
import Zero from "@/app/assets/Shopify-demo.jpg";

export function ShopifyDemo() {
  return (
    <div className="relative mx-auto  max-w-[80rem] px-6 text-center md:px-8" id="shopify-demo">
    <div
      className="relative flex mt-10 h-full  w-full flex-col items-center justify-center overflow-hidden rounded-2xl p-2 border bg-neutral-100 md:shadow-xl" 
    > 
     <div className="relative">
    <HeroVideoDialog
      className="block"
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/Rjl4mriibEM" 
      // videoSrc="https://www.youtube.com/embed/p9-R14A5tLI"          
      thumbnailSrc={Zero.src}
      thumbnailAlt="Hero Video"
    />
    </div>
  </div>
    </div>
  );
}
 