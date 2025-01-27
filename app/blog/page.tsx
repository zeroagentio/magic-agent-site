'use client';
import Footer from "@/components/blocks/footer";
import Navbar from "@/components/blocks/navbar";
import { blogData } from "@/lib/blogs";
import Image from "next/image";

const BlogsHomePage = () => {
    return (
        <>
    <Navbar />
        <div className="mt-32 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
           
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        All Blogs
        </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 text-start gap-x-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogData.map((post) => (
              <article key={post.id} 
              onClick={() => {
                window.location.href = `/blog/${post.slug}`;
              }}
              className="cursor-pointer flex max-w-xl flex-col items-start justify-between">
                <div className="items-center border border-gray-200 rounded-xl">
                  <Image
                    className="lg:h-44 rounded-xl h-auto w-full lg:w-96 object-cover max-lg:max-w-xs"
                    src={post.img}
                    alt={post.title}
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
                  <h3 className="mt-5 text-lg/6 font-semibold text-gray-900"> 
                      <span className="absolute inset-0" />
                      {post.title}
                  </h3>                  
                  <p className="mt-3 line-clamp-3 text-base text-gray-600">{post.description}</p>
                </div> 
              </article>
            ))}
          </div>
        </div> 

        <br />
        <br />
        <br /> 
      <Footer />
      </>
    );
}

export default BlogsHomePage;