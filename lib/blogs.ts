import { Authors } from "@/components/blocks/authors/authors";
import Shopify from "@/app/assets/shopify.png";
import CodeOnlineStore from "@/app/assets/code-store.png";
import StaticPage from "@/app/assets/static-page.png";

const THUMBNAIL = "https://startup-template-sage.vercel.app/hero-light.png";

export type Blog = {
  id: number;
  title: string;
  description: string;
  page: string;
  slug: string;
  author: Authors;
  date: string;
  img: any;
  category: string;
};
export const blogData: Blog[] = [
  {
    id: 1,
    title: "Transform Shopify Stores Intelligent with AI Shopping Agents",
    slug: "ai-shopping-agent-for-shopify-stores",
    description:
      "Discover how AI Shopping Agents transform Shopify stores by providing personalized shopping experiences and improving customer satisfaction.",
    page: "online-stores.md",
    author: "Rohith",
    date: "Dec 19, 2024",
    category: "Shopping",
    img: Shopify,
  },
  {
    id: 2,
    title: "Make Custom Online Stores Smart with AI Shopping Agents",
    slug: "ai-shopping-agent-for-custom-coded-online-stores",
    description:
      "Learn how AI Shopping Agents integrate with custom-coded online stores to provide assistance, handle orders, and boost customer engagement.",
    page: "online-stores.md",
    author: "Revanth",
    date: "Dec 20, 2024",
    category: "Shopping",
    img: CodeOnlineStore,
  },
  {
    id: 3,
    title: "AI Shopping Agent as Knowledge Base Agent for Websites",
    slug: "ai-knowledge-base-agent-for-websites",
    description:
      "Learn how AI shopping agents can be repurposed as knowledge base agents to assist troubleshooting, answer query and improve webpages experiences.",

    page: "online-stores.md",
    author: "Aravind",
    date: "Dec 21, 2024",
    category: "Website",
    img: StaticPage,
  },
];
