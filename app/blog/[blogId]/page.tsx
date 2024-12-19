import BlogHeader from '@/components/blocks/blog-header';
import Navbar from '@/components/blocks/navbar';
import Markdown from 'markdown-to-jsx';
import fs from 'fs'; 
import Footer from '@/components/blocks/footer'; 
import { Blog, blogData } from '@/lib/blogs';
import CTA from '@/components/blocks/cta';
 
const MarkdownTools  = {
  h2: { 
    props: {
      className: 'text-2xl',
    },
  },
  a: { 
      props: {
        className: 'text-blue-500 hover:underline',
      },
    },
   em: { 
      props: {
        className: 'font-medium',
      },
    },
    ul: { 
      props: {
        className: 'list-disc pl-10',
      },
    }, 
    img: { 
      props: {
        className: 'mx-auto object-cover rounded-xl max-w-1/2 max-h-1/2',
      },
    },         
};

export async function generateStaticParams() {
  // Extract blog slugs from your blog data
  return blogData.map((post: Blog) => ({ blogId: post.slug }));
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
    className="relative mx-auto my-28 max-w-[80rem] px-6 md:px-8"
    >  
     <BlogHeader
          title={blogPost.title}
          description={blogPost.description}
          date={blogPost.date}
          author={blogPost.author}
          img={blogPost.img}
        />
    <div className="text-lg">
      <Markdown     
      options={{ 
        wrapper: 'aside', 
        forceWrapper: true,
        overrides: MarkdownTools 
        }}
    >{filedescription}</Markdown>

      </div>
    </div>
    <CTA />
      <Footer />
      </>
    );
 } 

 