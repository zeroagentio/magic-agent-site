'use client';
import {
  Card, 
  CardHeader,
  CardTitle,
} from "@/components/magicui/card";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";   
interface Props {
  title: string;
  href?: string;
  description: string;
  image?: string; 
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  image, 
  className,
}: Props) {

        const handleClick = () => {
          window.open('', '_blank'); // Open in a new tab
        };

  return (
    <Card
      className={
        "flex flex-col text-left overflow-hidden border rounded-xl transition-all duration-300 ease-out h-full"
      }
    >
      <div
        className={cn("block", className)}
      >
        
        {image && (
         
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          /> 
        )}
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-xl">{title}</CardTitle>
          <p className="mt-2 max-w-lg text-gray-600 text-left">
                {description}
          </p>
          <a href={href} target="_blank" className="flex pt-1 font-medium hover:underline text-sm align-center">Learn More <ArrowRightIcon width={18} className='pl-1' /></a> 
        </div>
      </CardHeader>
      {/* <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent> */}
      {/* <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter> */}
    </Card>
  );
}
