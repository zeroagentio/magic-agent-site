import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Blog } from "./blogs";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomPosts(blogData : Blog[]) {
  const shuffled = [...blogData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

export async function generateMetadata({ params }: { params: { title: string, description: string, slug: string } }): Promise<Metadata> {

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical : `https://zeroagent.io/${params.slug}`
    }
  };
}

export const WAITINGLIST_FORM = "https://forms.zohopublic.com/zeromagic/form/ZeromagicWaitlistForm/formperma/AgfMAJ7hBxvNYCAsKvd-OskB1AOol9hrUNig-l8nN4I"

export const PRODUCT_DEMO = "https://www.youtube.com/watch?v=IChhbRFLAMU"
export const VIEW_DEMO = "https://cal.com/ndrohith/30min"

export const SHOPIFY = "https://apps.shopify.com/zeroagent"
// export const SHOPIFY = "https://docs.zeroagent.io/store/shopify"

export const WEBPAGES = "https://docs.zeroagent.io/make-smarter/lander-sites"

export const TUTORIALS = "https://www.youtube.com/@zeroagentio"

export const PRICING = "/pricing"
export const BLOGS = "/blog"
export const USECASES = "/#use-case"

export const AI_MANAGER = "https://docs.zeroagent.io/features/talk-with-zero"
export const KNOWLEDGE_BASE = "https://docs.zeroagent.io/features/knowledge-base"
export const AI_PRODUCT_SEARCH = "https://docs.zeroagent.io/features/ai-search"
export const ANALYTICS = "https://docs.zeroagent.io/features/analytics"
export const AI_SUPPORT = "https://docs.zeroagent.io/features/ai-support"
export const SHOPPING_EXP = "https://docs.zeroagent.io/ai-shopping"


export const MY_APP = "https://app.zeroagent.io/"
export const DOCS = "https://docs.zeroagent.io/"
export const TOOLS = "https://docs.zeroagent.io/tools/introduction"
export const CONTACT = "mailto:support@zeroagent.io"