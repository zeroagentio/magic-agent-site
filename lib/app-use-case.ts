import { Authors } from "@/components/blocks/authors/authors";
import Shopify from "@/app/assets/shopify.png";
import CodeOnlineStore from "@/app/assets/code-store.png";
import StaticPage from "@/app/assets/static-page.png";
import ZeroagentOverview from "@/app/assets/zeroagent-overview.png";
import  AiShoppingAgent from  "@/app/assets/smart_shopping_cart.jpeg";
import  OnlineStore from  "@/app/assets/online-store.jpg";
import SportsStore from "@/app/assets/sports-store.jpg";
import SareeStore from "@/app/assets/saree-store.jpg";
import BabyEssentialStore from "@/app/assets/baby-essentials-store.jpg";

const THUMBNAIL = "https://startup-template-sage.vercel.app/hero-light.png";

export type UseCaseDemo = {
  id: number;
  videoSrc: string;
  thumbnail: string;
};
export const useCaseData: UseCaseDemo[] = [
  {
    id: 1,
    videoSrc: "https://www.youtube.com/embed/6hUlZ7F0z-8",
    thumbnail: SareeStore.src
  },
    {
    id: 2,
    videoSrc: "https://www.youtube.com/embed/E92DFU3vxNI",
    thumbnail: SportsStore.src
  },

    {
    id: 3,
    videoSrc: "https://www.youtube.com/embed/WG9YDomS0O4",
    thumbnail: BabyEssentialStore.src
  },
];
