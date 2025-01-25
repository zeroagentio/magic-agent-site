import { Authors } from "@/components/blocks/authors/authors";
import Shopify from "@/app/assets/shopify.png";
import CodeOnlineStore from "@/app/assets/code-store.png";
import StaticPage from "@/app/assets/static-page.png";
import ZeroagentOverview from "@/app/assets/zeroagent-overview.png";
import  AiShoppingAgent from  "@/app/assets/ai-shopping-agent.png";
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
    page: "ai-shopping-agent-for-shopify-stores.md",
    author: "Rohith",
    date: "Dec 21, 2024",
    category: "Shopping",
    img: Shopify,
  },
  {
    id: 2,
    title:
      "Make Online Stores Smart with AI Shopping Agents Built by Custom Code ",
    slug: "ai-shopping-agent-for-custom-coded-online-stores",
    description:
      "Learn how AI Shopping Agents integrate with custom-coded online stores with help of SDK to provide assistance, handle orders, and boost customer engagement.",
    page: "ai-shopping-agent-for-custom-coded-online-stores.md",
    author: "Revanth",
    date: "Dec 25, 2024",
    category: "Shopping",
    img: CodeOnlineStore,
  },
  {
    id: 3,
    title: "AI Knowledge Based Agent for Websites with Zeroagent's SDK",
    slug: "ai-knowledge-base-agent-for-websites",
    description:
      "Learn how AI shopping agents can be repurposed as knowledge base agents to assist troubleshooting, answer query and improve webpages experiences.",

    page: "ai-knowledge-base-agent-for-websites.md",
    author: "Aravind",
    date: "Dec 31, 2024",
    category: "Website",
    img: StaticPage,
  },
  {
    id: 4,
    title: "Zeroagent: A Comprehensive Overview",
    slug: "zeroagent-a-comprehensive-overview",
    description:
      "ZeroAgent is your virtual store assistant for online stores, designed to enhance customer experiences. It delivers personalized shopping recommendations, provides instant customer support, and simplifies tasks like adding products to the cart or handling order inquiries—all in real-time",
    page: "zeroagent-a-comprehensive-overview.md",
    author: "Rohith",
    date: "Jan 2, 2025",
    category: "Overview",
    img: ZeroagentOverview,
  },
  {
    id: 5,
    title: "Zeroagent for Shopify: Quickstart Guide",
    slug: "zeroagent-for-shopify-quickstart-guide",
    description:
      "Connect Zeroagent to your Shopify store and start offering AI-driven shopping assistance to your customers today.",
    page: "zeroagent-for-shopify-quickstart-guide.md",
    author: "Rohith",
    date: "Jan 13, 2025",
    category: "Shopping",
    img: Shopify,
  },
  {
    id: 6,
    title: "What are AI Shopping Agents?",
    slug: "what-are-ai-shopping-agents",
    description:
      "Online shopping has transformed the way we purchase goods, but it still lacks the personal touch of a physical store assistant. These advanced digital assistants designed to bridge this gap and make online shopping smarter, more personalized, and efficient.",
    page: "what-are-ai-shopping-agents.md",
    author: "Rohith",
    date: "Jan 25, 2025",
    category: "Overview",
    img: AiShoppingAgent,
  },
];
