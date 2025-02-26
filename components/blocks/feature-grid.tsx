import { ProjectCard } from "./project-card";
import SearchFeature from "@/app/assets/search-feature.jpg";
import KnowledgeFeature from "@/app/assets/knowledge-base.jpg";
import AnalyticsFeature from "@/app/assets/analytics-feature.jpg";
import Conversations from "@/app/assets/conversations.jpg";
import AllInOne from "@/app/assets/all-in-one-assistant.jpg";
import ShoppingExperience from "@/app/assets/shopping-experience.jpg";
import { AI_PRODUCT_SEARCH , AI_SUPPORT, ANALYTICS, KNOWLEDGE_BASE, SHOPPING_EXP} from "@/lib/utils";

const projects =  [
  {
    title: "AI Product Search",  
    description:
      "Store assistants learns preferences and behavior to suggest products that are just right for your customer.",   
    image: SearchFeature.src,
    href: AI_PRODUCT_SEARCH
    // video:"",
  },
  {
    title: "Emotional Intelligence Analysis",
    description:
      "Get deeper analysis of user emotions, preferences and behavioral patterns for smarter business decisions.",
    image: AnalyticsFeature.src,
    href: ANALYTICS
    // video: "https://cdn.magicui.design/bento-grid.mp4",
  },
  {
    title: "AI Support", 
    description:
      "Let AI handle customer queries effortlessly. Get instant and accurate responses anytime!", 
    image: Conversations.src,
    href: AI_SUPPORT
    // video: "https://cdn.llm.report/openai-demo.mp4",
  },
  {
    title: "AI Learns from Knowledge Base", 
    description:
      "Easily keep your AI up to date. It learns from real-time data, so your customers always get the most accurate information",
    image: KnowledgeFeature.src,
    href: KNOWLEDGE_BASE
    // video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  },
  {
    title: "AI Shopping Experience", 
    description:
      "AI assistant enhances customer shopping experiences by delivering personalized, intelligent product discovery", 
    image: ShoppingExperience.src,
    href: SHOPPING_EXP
    // video: AnalyticsFeature.src,
  },
  {
    title: "All-in-One Store Assistant",  
    description:
      "From adding to cart, order returns & many more - AI assistant does it all for your customers.",   
    image: AllInOne.src,
    href: SHOPPING_EXP
    // video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  },
]

export default function FeatureGrid() {
    return ( 
        <div className="mt-32 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-lg font-semibold text-gray-600">Smarter Shopping</h2>
          <p className="mx-auto mt-2 max-w-2xl leading-loose text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl"
          style={{ lineHeight: '1.2' }}>
            {/* AI Ready to Help Always! */}
            Making Every Step Easy with AI
            {/* AI Store Assistants Here to Help, Always */}
          {/* Turn Every Customer VIP with AI Store Assistants */}
          </p>
 

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 mt-10 sm:mt-16  mx-auto">
            {projects.map((project, id) => (
              
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image} 
                /> 
            ))}
          </div>         
          </div> 
    )
  }
  