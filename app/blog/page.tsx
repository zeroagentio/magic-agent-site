import Footer from "@/components/blocks/footer";
import Navbar from "@/components/blocks/navbar";
import { blogData } from "@/lib/blogs";

const BlogsHomePage = () => {
    return (
        <>
    <Navbar />
        <div className="mt-32 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
           
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        All Blogs
        </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 text-start gap-x-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogData.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="items-center max-lg:pb-12 max-lg:pt-10 sm:px-2 lg:pb-10 p-3 border border-gray-200 rounded-xl">
                  <img
                    className="h-44 w-full object-fit max-lg:max-w-xs"
                    // className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[8/8]"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
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
                    <a href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
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