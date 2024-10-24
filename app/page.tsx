import { BannerCard } from "@/components/blocks/banner-card";
import CTA from "@/components/blocks/cta";
import CustomDescription from "@/components/blocks/custom-description";
import CustomText from "@/components/blocks/custom-text";
import { FeaturesBento } from "@/components/blocks/features-bento-grid";
import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";   
import Navbar from "@/components/blocks/navbar"; 
import { WorkflowCard } from "@/components/blocks/workflow-card";

export default function Home() {
  return (
    <> 
    <Navbar />
    <div  
    className="relative mx-auto my-28 max-w-[80rem] px-6 text-center md:px-8"
    >  
      <Header />         
      <BannerCard />
      <br /> 
      <div className="mt-14">
      <CustomText title={"AI Agents, Business Superheroes"} />
      <CustomDescription title={"Connect tools, Automate tasks and stay updated with AI Agents"} />      
      <FeaturesBento />
      </div>

      {/* <div className="mt-20">
      <CustomText title={"AI Agents, Business Superheroes"} />
      <CustomDescription title={"Connect with 10+ integrations and let our agents handle daily tasks"} />
      <WorkflowCard />
      </div>  */}
    </div>
      <CTA />
      <br />
      <br /> 
      <Footer />
    </>
  );
}
