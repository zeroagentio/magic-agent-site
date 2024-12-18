
const THUMBNAIL = "https://startup-template-sage.vercel.app/hero-light.png"

const TalkWithZero = () => {
    return (
        <div className="mt-32 mx-auto text-start max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-base/7 font-semibold text-gray-600">AI Store Manager</h3>
        <h2 className="mt-2 max-w-lg text-balance  text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
        Talk With Zero
        </h2>
        <p className="mt-4 w-3/5 line-clamp-3 text-xl font-medium text-gray-600">AI Store Manager handles orders, tracks inventory, and provide insights into customer activity & store performance, so you don't have to.
        </p>
        <div
                className="relative flex mt-10 h-full  w-full flex-col items-center justify-center overflow-hidden rounded-2xl p-2 border bg-neutral-100 md:shadow-xl" 
              > 
               <div className="relative">
                  
                    <img                    
                      className="dark:hidden block"    
                      src={THUMBNAIL}
                      alt="talk zero"
                    />
                    <img
                      className="hidden dark:block"  
                      src={THUMBNAIL}
                      alt="talk zero"
                    />
                  </div>
              </div>
        </div>
    );
}

export default TalkWithZero;