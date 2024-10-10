import { BannerCard } from "@/components/blocks/banner-card";
import CTA from "@/components/blocks/cta";
import CustomDescription from "@/components/blocks/custom-description";
import CustomText from "@/components/blocks/custom-text";
import { FeaturesBento } from "@/components/blocks/features-bento-grid";
import Header from "@/components/blocks/header";   

export default function Home() {
  return (
    <> 
    <div  
    className="relative mx-auto mt-28 max-w-[80rem] px-6 text-center md:px-8"
    >  
      <Header />         
      <BannerCard />
      <br /> 
      <div className="mt-14">
      <CustomText title={"Data to AI"} />
      <CustomDescription title={"Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales."} />
      <FeaturesBento />
      </div>
      <br />
      <CTA />
      <br />
      <br />
    </div>
    </>
  );
}
