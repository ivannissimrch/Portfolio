import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ivan Rebolledo | Front-End Developer",
  description:
    "Frontend portfolio with React, Next.js, and TypeScript projects.",
  openGraph: {
    title: "Ivan Rebolledo | Front-End Developer",
    description:
      "DevVault and Stocks App — Built with React, Next.js, and TypeScript.",
    url: "https://ivanrebolledo.dev",
    siteName: "Ivan Rebolledo Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Screenshot of Ivan Rebolledo portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Rebolledo | Front-End Developer",
    description:
      "DevVault and Stocks App — Built with React, Next.js, and TypeScript.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ut3dwadgs7");
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
