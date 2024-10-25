import CustomText from "@/components/blocks/custom-text";
import Footer from "@/components/blocks/footer";
import Navbar from "@/components/blocks/navbar";
import fs from 'fs'; 
import Markdown from 'markdown-to-jsx'

export default function TermsConditions() {

    const filePath = 'app/terms-conditions/terms-condition.md';
    const fileContent = fs.readFileSync(filePath, 'utf8'); 

    return (
        <>
    <Navbar />
    <div className="mt-20 container mx-auto">
    <div
        className="text-center bg-gradient-to-br dark:from-zinc-100 from-black from-30% dark:to-zinc-100/40 to-black/40 bg-clip-text font-display text-center text-2xl font-bold my-7 tracking-normal text-black dark:text-zinc-100 md:leading-[5rem]"
    >
         Terms and Conditions
      </div> 

        <div className="text-lg">
      <Markdown     
       options={{ 
        wrapper: 'aside', 
        forceWrapper: true,
        overrides: {
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
          },
        }}
    >{fileContent}</Markdown>

     </div></div>
    <br />
      <br /> 
      <Footer />
      </>
    );
}