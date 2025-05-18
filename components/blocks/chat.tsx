'use client'; 
import Image from 'next/image';
import ChatMock from "@/app/assets/recommendation-mock.gif";
import { ArrowBigUpDash, ArrowRightIcon, ChartLineIcon, CopyPlus, HeadsetIcon, IndianRupeeIcon, PackagePlus, Search, ShoppingCartIcon } from 'lucide-react';
import { MY_APP } from '@/lib/utils';
import { RainbowButton } from '../magicui/rainbow-button';  
 
export default function Chat () {
    return (  
              <div className=""> 
                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4  lg:gap-x-8 lg:px-8 lg:pt-16">
                  
                  {/* Options */}
                  <div className="lg:col-span-2"> 
                     <Image 
                     alt=''
                     className='lg:max-w-[30rem] max-w-[20rem] w-auto h-full'
                    //  width={400}
                    //  height={700}
                     src={ChatMock}
                     />
                  </div>
            
                  <div className="lg:col-start-3 lg:col-span-2 lg:pr-8">
                 
                    <div className="sm:max-w-lg text-left pt-10">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            The AI Employee Who Never Sleeps!
            </h1>
            <p className="mt-10 text-xl font-medium text-gray-600">
            Zero learns what your customers like and suggests spot-on recommendations, making shopping experience smarter and easier.            </p>
          </div>
          <StatsCards />
                  </div>
         
                </div>
              </div> 
    )
  }



 function StatsCards() {


      const handleClick = () => {
        window.open(MY_APP, '_blank'); // Open in a new tab
      };

    const stats = [
        { icon: <Search />, title: "Smart Product Matches", value: "Increase cart rate by 35% " },
        { icon: <PackagePlus />, title: "Perfect Pairings", value: "Boost AOV by 28%" },
        { icon: <ArrowBigUpDash />, title: "Best Performing Products", value: "3x Faster Checkouts" },
    ];
  
    return (
      <div className="space-y-5 mt-10 text-left">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center w-full sm:w-4/5 gap-4 p-4 border-2 rounded-2xl  border-neutral-200`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white text-2xl">
              {stat.icon}
              
            </div>
            <div>
              <p className="text-lg font-semibold">{stat.title}</p>
              <p className="text-gray-500">{stat.value}</p>
            </div>
          </div>
        ))}
<br/>
 <RainbowButton 
  onClick={handleClick}
  className="flex items-center font-medium">Try Free Today <ArrowRightIcon width={20} className='pl-1' /></RainbowButton>

      </div>
    );
  }
  