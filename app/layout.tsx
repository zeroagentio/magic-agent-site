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
  title: "ZeroAgent",
  description:
    "Streamline your workflow with our AI Agents that connect across various business tools. Automate tasks effortlessly using simple chat prompts.",
  icons: [
    { rel: "icon", url: Logo },
    { rel: "apple-touch-icon", url: Logo },
  ],
  applicationName : "ZeroAgent",
  referrer : "origin",  
  keywords: [
    "AI Agent",
    "Personalized AI",
    "Integrations",
    "Task Automation",
    "Business Tools",
    "Business Productivity",
    "Integrations",
    "Workflow Automation",
  ],
  authors: [
    { name: "ZeroMagic Labs", url: "https://github.com/teamzeromagic" },
    { name: "ZeroAgent", url: "https://zeroagent.io/" },
  ],
  openGraph: {
    title: "Personalized AI Agent for Business Tools",
    description:
      "Leverage the power of AI to manage tasks across Google Calendar, Slack, and more with our Personalized AI Agents.",
    url: "https://zeroagent.io/", // Replace with your actual website URL
    siteName: "ZeroAgent",
    images: [
      {
        url: Thumbnail.src,  
        width: 1200,
        height: 630,
        alt: "ZeroAgents in Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // site: "@zeromagic", // Replace with your actual Twitter handle
    title: "Personalised AI Agent - Automate Tasks Across Business Tools",
    description:
      "Experience seamless task automation across business tools with our Personalised AI Agents.",
    images: Thumbnail.src, // Replace with the actual image URL
  },
  verification: {
    google: "",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RQMXKE8FE1"></script>
    <script 
     dangerouslySetInnerHTML={{
      __html: `
         window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-RQMXKE8FE1');
      `,
    }}
    > 
    </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-RQMXKE8FE1"/>       
    </html>
  );
}
