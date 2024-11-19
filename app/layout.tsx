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
  title: "Zeroagent",
  description:
    "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts. Work smarter by eliminating repetitive work!",
  icons: [
    { rel: "icon", url: Logo },
    { rel: "apple-touch-icon", url: Logo },
  ],
  applicationName: "AI Agents for everyday Business apps for Free - Zeroagent",
  referrer: "origin",
  keywords: [
    "AI Agent",
    "Apps",
    "Task Automation",
    "Business Apps",
    "Tools",
    "Productivity",
    "Integrations",
  ],
  authors: [
    { name: "ZeroMagic Labs", url: "https://github.com/zeroagentio" },
    { name: "Zeroagent", url: "https://zeroagent.io/" },
  ],
  openGraph: {
    title: "AI Agents for everyday Business apps for Free",
    description:
      "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts. Work smarter by eliminating repetitive work!",
    url: "https://zeroagent.io/", // Replace with your actual website URL
    siteName: "Zeroagent",
    images: [
      {
        url: Thumbnail.src,
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
    title: "AI Agents for everyday Business apps",
    description:
      "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts. Work smarter by eliminating repetitive work!",
    images: Thumbnail.src, // Replace with the actual image URL
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
    headline: "AI Agents for everyday Business apps",
    description:
      "Simplify your day-to-day business operations with AI Agents for Free. Connect, manage, and execute tasks across multiple apps in one platform using simple chat prompts.",

    subjectOf: {
      "@type": "VideoObject",
      name: "Demo: AI Agents for everyday Business app - Zeroagent",
      description:
        "AI Agents that connects across multiple business apps and perform tasks with simple chat prompts",
      thumbnail: Thumbnail.src,
      embedUrl: "https://www.youtube.com/watch?v=z-XNOPTabIk",
    },
  };

  return (
    <html lang="en" className="dark">
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
