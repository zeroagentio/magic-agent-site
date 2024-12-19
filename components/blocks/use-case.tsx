import Shopify from "@/app/assets/shopify.png";
import CodeOnlineStore from "@/app/assets/code-store.png";
import StaticPage from "@/app/assets/static-page.png";

import Image from "next/image";

const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      img: Shopify, 
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
      img: CodeOnlineStore, 
      },
      {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' }, 
      img: StaticPage,
      },
    // More posts...
  ]
  
  export default function UseCase() {
    return ( 
        <div className="mt-32 mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8" id="use-case">
          
        <h2 className="text-center text-base/7 font-semibold text-gray-600">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
        Our Agent Use Cases
        </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 text-start gap-x-8 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="items-center   border border-gray-200 rounded-xl">
                  <Image
                    className="lg:w-96 w-auto max-lg:max-w-xs"
                    src={post.img}
                    alt="OnlineStore"
                  />
                </div> 
                <div className="flex items-center mt-4 text-xs">                                  
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full  px-3 py-1 font-medium text-gray-600 bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>            
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
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
  