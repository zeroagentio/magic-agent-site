import BlogHeader from '@/components/blocks/blog-header';
import Navbar from '@/components/blocks/navbar';
import Markdown from 'markdown-to-jsx';
import fs from 'fs'; 
import Footer from '@/components/blocks/footer'; 
import { Blog, blogData } from '@/lib/blogs';
import CTA from '@/components/blocks/cta';
import Image from "next/image";
import { getRandomPosts } from '@/lib/utils'; 
import { Metadata } from 'next';

const MarkdownTools  = {
  // h2: { 
  //   props: {
  //     className: 'text-2xl',
  //   },
  // },
  // a: { 
  //     props: {
  //       className: 'text-blue-500 hover:underline',
  //     },
  //   },
  //  em: { 
  //     props: {
  //       className: 'font-medium',
  //     },
  //   },
  //   ul: {
  //     props: {
  //       className: 'list-disc pl-10',
  //     },
  //   }, 
    img: { 
      props: {
        className: 'mx-auto object-cover rounded-xl border',
      },
    },   
};

export async function generateStaticParams() {
  // Extract blog slugs from your blog data
  return blogData.map((post: Blog) => ({ blogId: post.slug }));
}

// Use `generateMetadata` for dynamic metadata
export async function generateMetadata({ params }: { params: { blogId: string } }): Promise<Metadata> {
  
  const blogPost = blogData.find((post : Blog) => post.slug === params.blogId);

  return {
    title: blogPost?.title,
    description: blogPost?.description,
    alternates: {
      canonical : `https://zeroagent.io/${blogPost?.slug}`
    }
  };
}


export default function BlogPost({ params }: { params: { blogId: string } }) {

  const blogPost = blogData.find((post : Blog) => post.slug === params.blogId);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  const filePath = `app/blog/${blogPost.page}`;
  const filedescription = fs.readFileSync(filePath, 'utf8');

  return (
    <>
    <Navbar /> 
    <div  
    className="relative mx-auto my-28 max-w-[75rem] px-6 md:px-8"
    >  
     <BlogHeader
          title={blogPost.title}
          description={blogPost.description}
          date={blogPost.date}
          author={blogPost.author}
          img={blogPost.img}
        />
    <div className="prose prose-lg mx-auto text-lg">
      <Markdown     
      options={{ 
        wrapper: 'aside', 
        forceWrapper: true,
        overrides: MarkdownTools 
        }}
    >{filedescription}</Markdown>
      </div>
    <br />
    <hr /> 

     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 text-start gap-x-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {getRandomPosts(blogData).map((post) => (
                  <article key={post.id} 
                  // onClick={() => {
                  //   window.location.href = `/blog/${post.slug}`;
                  // }}
                  className="cursor-pointer flex max-w-xl flex-col items-start justify-between">
                    <div className="items-center border border-gray-200 rounded-xl">
                      <Image
                        className="lg:h-44 h-auto w-full lg:w-96 rounded-xl object-fit max-lg:max-w-xs"
                        src={post.img}
                        alt={post.title}
                      />
                    </div> 
                    <div className="flex items-center mt-4 text-xs">                                                        
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

    <CTA />
      <Footer />
      </>
    );
 } 

 