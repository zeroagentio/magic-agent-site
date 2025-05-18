"use client";
import AppSampleVideo from "@/components/blocks/app-samples";
import { BannerCard } from "@/components/blocks/banner-card";
import Chat from "@/components/blocks/chat";
import CTA from "@/components/blocks/cta";
import FeatureGrid from "@/components/blocks/feature-grid";
import Footer from "@/components/blocks/footer";
import Header from "@/components/blocks/header";
import Navbar from "@/components/blocks/navbar";
import TalkWithZero from "@/components/blocks/talk-with-zero";
import UseCase from "@/components/blocks/use-case";
import VoiceAI from "@/components/blocks/voice-ai";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react"; 

const MIXPANEL_ENABLED = process.env.NODE_ENV === "production";
 
export default function Home() {
  useEffect(() => {
    if (MIXPANEL_ENABLED) {
      console.log("mixpanel initi");

      mixpanel.init("76c4103b3db403a23d99266da36795ab", {
        debug: false,
        track_pageview: true,
        persistence: "localStorage",
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative mx-auto my-28 max-w-full lg:max-w-[80rem] px-6 text-center md:px-8">
        <Header />
        <BannerCard />
        <VoiceAI />
        <Chat />
        <FeatureGrid />
        <AppSampleVideo />
        <TalkWithZero />
        <UseCase />
      </div>
      <CTA />
      <br />
      <Footer />
    </>
  );
}
