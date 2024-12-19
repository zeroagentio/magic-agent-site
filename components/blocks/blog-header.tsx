import React from "react";
import { Authors } from "./authors/authors";
import { getAuthorComponent } from "./authors/authors.utls";


type Props = {
    title : string;
    description : string;
    date : string;
    author: Authors;
    img: string;
}

const BlogHeader:React.FC<Props> = ({
    author,
    date,
    description,
    title,
    img
}) => {

  const AuthorComponent = getAuthorComponent(author);

  return (
    <div className="sm:py-16 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg text-gray-900 text-start">
            <h2 className="text-4xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-4 text-lg ">{description}
            </p>
            <br />
            <time className="text-gray-500">
            {date}
                </time>
            {AuthorComponent}
          </div> 
          <div
                className="rounded-2xl p-2 border bg-neutral-100 md:shadow-xl" 
              >  
                    <img                    
                      className="h-full w-full object-fit"    
                      src={img}
                      alt="talk zero"
                    />
              </div>
        </div>
      </div> 
    </div>
  )
}


export default BlogHeader;