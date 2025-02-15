import Image from "next/image";
import { blogData } from "@/lib/blogs";
 
  
  export default function UseCase() {

    const posts = blogData.slice(0, 3);
    

    return ( 
        <div className="mt-24 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8" id="use-case">
          
        <h2 className="text-center text-base/7 font-semibold text-gray-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Our Agent Use Cases
        </p>
          <div className="mx-auto grid max-w-2xl space-y-4 md:space-y-0 grid-cols-1 text-start gap-x-8 mt-4 sm:mt-10 xl:pt-12 pt-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="items-center w-full  border border-gray-200 rounded-xl">
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
                </div> 
              </article>
            ))}
          </div>
        </div> 
    )
  }
  