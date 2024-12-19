import { Authors } from "@/components/blocks/authors/authors";

const THUMBNAIL = "https://startup-template-sage.vercel.app/hero-light.png";

export type Blog = {
    id : number;
    title : string;
    description : string;
    page : string;
    slug : string;
    author : Authors;
    date : string;
    img: string;
    category : string;
}
export const blogData:Blog[] = [
    {
      "id": 1,
      "title": "Blog Post 1",
      "description": "In this blog post, we’ll explore how to create your first REST API on the Zeromagic Platform. Whether you’re a beginner or an experienced developer, our intuitive Workflow Builder will guide you through setting up endpoints, defining data models, and handling HTTP requests",
      "page" : 'online-stores.md',
      "slug": "blog-post-1",
      "author" : 'Rohith',
      "date" : 'Mar 16, 2020',
      "category" : "Marketing",
      "img" : THUMBNAIL
    },
    {
      "id": 2,
      "title": "Blog Post 2",
      "description": "This is the description of blog post 2.",
      "page" : 'online-stores.md',
      "slug": "blog-post-2",
      "author" : 'Rohith',
      "date" : 'Mar 16, 2020',
      "category" : "Marketing",
      "img" : THUMBNAIL
    },
    {
      "id": 3,
      "title": "Blog Post 3",
      "description": "This is the description of blog post 3.",
      "page" : 'online-stores.md',
      "slug": "blog-post-3",
      "author" : 'Rohith',
      "date" : 'Mar 16, 2020',
      "category" : "Marketing",
      "img" : THUMBNAIL
    }
  ]