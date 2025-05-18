import Image from "next/image"; 
import HeroVideoDialog from "../magicui/hero-video-dialog"; 
import { useCaseData } from "@/lib/app-use-case";
  
  export default function AppSampleVideo() {

    const posts = useCaseData.slice(0, 4);
    

    return ( 
        <div className="mt-10 sm:mt-24 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8" id="real-world-use-case">
          
        <h2 className="text-center text-base/7 font-semibold text-gray-600">Product Showcase</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Explore Our Demos
        </p>
          <div className="mx-auto grid max-w-2xl space-y-4 md:space-y-0 grid-cols-1 text-start gap-x-4 gap-y-4 mt-4 sm:mt-6 xl:pt-12 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <HeroVideoDialog
                  className="block"
                  animationStyle="from-center"
                  videoSrc={post.videoSrc} 
                  thumbnailSrc={post.thumbnail}
                  thumbnailAlt="Hero Video"
                />
                {/* <div className="items-center w-full  border border-gray-200 rounded-xl">
                  <Image
                    className="w-full lg:w-96 w-auto"
                    src={post.img}
                    alt="OnlineStore"
                  />
                </div> 
                <div className="flex items-center mt-4 text-xs">                                  
                  <div 
                    className="relative z-10 rounded-full  px-3 py-1 font-medium text-gray-600 bg-gray-100"
                  >
                    {post.category}
                  </div>
                </div>            
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={`blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>                  
                  <p className="mt-5 line-clamp-3 text-base text-gray-600">{post.description}</p>
                </div>  */}
              </article>
            ))}
          </div>
        </div> 
    )
  }
  