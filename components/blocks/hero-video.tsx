import HeroVideoDialog from "@/components/magicui/hero-video-dialog"; 

const THUMBNAIL = "https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/magic-agent-banner.png?alt=media&token=13500c4d-28d0-4eb5-8d59-315a218197d5"

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/wct6bzlSUOs"    
        thumbnailSrc={THUMBNAIL}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/wct6bzlSUOs" 
        thumbnailSrc={THUMBNAIL}
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
