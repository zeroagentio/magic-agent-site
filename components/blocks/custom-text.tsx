import React from "react";
import GradualSpacing from "../magicui/gradual-spacing";

type Props = {
    title : string
}
const CustomText : React.FC<Props> = ({title}) => {
    return (
        <GradualSpacing
        className="bg-gradient-to-br dark:from-zinc-100 from-black from-30% dark:to-zinc-100/40 to-black/40 bg-clip-text font-display text-center text-4xl font-bold my-7 -tracking-widest text-black dark:text-zinc-100 md:text-7xl md:leading-[5rem]"
        text={title}
      />
    //      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
    //      {title}
    //   </span>
    )
}

export default CustomText;