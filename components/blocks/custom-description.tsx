import React from "react";

type Props = {
    title : string;
}
const CustomDescription:React.FC<Props> = ({
    title
}) => {
    return (
        <p className="my-4 text-lg leading-loose tracking-normal text-gray-400 md:text-xl text-balance font-medium translate-y-[-1rem] animate-fade-in opacity-1 [--animation-delay:400ms]">
          {title}
      </p>
    )
}

export default CustomDescription;