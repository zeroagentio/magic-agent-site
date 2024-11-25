'use client'
import { BannerCard } from "@/components/blocks/banner-card";
import CTA from "@/components/blocks/cta";
import CustomDescription from "@/components/blocks/custom-description";
import CustomText from "@/components/blocks/custom-text";
import { ExtraFeaturesBento, FeaturesBento } from "@/components/blocks/features-bento-grid";
import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";   
import { HeroVideoDialogDemo } from "@/components/blocks/hero-video";
import Navbar from "@/components/blocks/navbar"; 
import { WorkflowCard } from "@/components/blocks/workflow-card";
import mixpanel from "mixpanel-browser";
import { env } from "process";
import { useEffect } from "react";

const MIXPANEL_ENABLED = process.env.NODE_ENV === "production";

export default function Home() {

  if (MIXPANEL_ENABLED) {

    mixpanel.init('87b1ee5af8f55762dea98975d8ba744f', {
      debug: false,
      track_pageview: true,
      persistence: "localStorage",
    }); 
    console.log("mixpanel", mixpanel);
  }

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
      <CustomDescription title={"Connect apps, Automate tasks and stay updated with AI Agents"} />      
      <FeaturesBento />
      <br />
      <ExtraFeaturesBento />
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
