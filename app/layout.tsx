import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Logo from "@/app/assets/logo.svg";
import Thumbnail from "@/app/assets/thumbnail.png";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next-Gen AI Shopping Agent for Online Stores - Zeroagent Free Now",
  description:
    "Zeroagent turns your online store smart. Our AI Shopping Agent offers personalized product recommendations, handles orders, answers query & more for customers - Just like shopping in-store, but online",
  icons: [
    { rel: "icon", url: Logo },
    { rel: "apple-touch-icon", url: Logo },
  ],
  applicationName: "Next-Gen AI Shopping Agent for Online Stores - Zeroagent Free Now",
  referrer: "origin",
  keywords: [
    "AI Agent",
    "Shopping",
    "Online Store",
    "Store Assistant",
    "Ecommerce" 
  ],
  authors: [
    { name: "ZeroMagic Labs", url: "https://github.com/zeroagentio" },
    { name: "Zeroagent", url: "https://zeroagent.io/" },
  ],
  openGraph: {
    title: "Next-Gen AI Shopping Agent for Online Stores - Zeroagent Free Now",
    description:
    "Zeroagent turns your online store smart. Our AI Shopping Agent offers personalized product recommendations, handles orders, answers query & more for customers - Just like shopping in-store, but online",
    url: "https://zeroagent.io/", // Replace with your actual website URL
    siteName: "Zeroagent",
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent-nextgen-thumbnail.png?alt=media&token=81f32d08-f27d-45ed-9342-0632d8862941', // Thumbnail.src,
        width: 1200,
        height: 630,
        alt: "ZeroAgents in Action",
      },
    ],
    videos: {
      url: "https://www.youtube.com/watch?v=z-XNOPTabIk",
      secureUrl: "https://www.youtube.com/watch?v=z-XNOPTabIk",
      type: "video/youtube",
      width: 1280,
      height: 720,
    },
  },
  twitter: {
    card: "summary_large_image",
    // site: "@zeromagic", // Replace with your actual Twitter handle
    title: "Next-Gen AI Shopping Agent for Online Stores Free - Zeroagent",
    description:
    "Zeroagent turns your online store smart. Our AI Shopping Agent offers personalized product recommendations, handles orders, answers query & more for customers - Just like shopping in-store, but online",
    images: 'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent-nextgen-thumbnail.png?alt=media&token=81f32d08-f27d-45ed-9342-0632d8862941' //Thumbnail.src, 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zeroagent.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLD = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    name: "Zeroagent",
    url: "https://zeroagent.io/",
    headline: "Next-Gen AI Shopping Agent for Online Stores - Zeroagent",
    description:
      "Turn your online store smart with our AI Shopping Agent that offers personalized product recommendations, handles orders, answers query & more for customers.",
    subjectOf: {
      "@type": "VideoObject",
    headline: "Demo: AI Shopping Agent for Online Stores - Zeroagent",
      description:
        "AI Agent that connects across multiple business apps and perform tasks with simple chat prompts",
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/zeromagicsite.appspot.com/o/zeroagent-nextgen-thumbnail.png?alt=media&token=81f32d08-f27d-45ed-9342-0632d8862941', //Thumbnail.src,
      embedUrl: "https://www.youtube.com/watch?v=z-XNOPTabIk",
    },
  };
  

  return (
    <html lang="en" className="">
      <head>
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RQMXKE8FE1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RQMXKE8FE1');
      `,
          }}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-RQMXKE8FE1" />
    </html>
  );
}
