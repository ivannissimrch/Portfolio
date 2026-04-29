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
    "Ivan Rebolledo is a Front-End Developer building web apps with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: [
    "Ivan Rebolledo",
    "Ivan Robolledo",
    "Evan Rebolledo",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "ivanrebolledo.dev",
  ],
  alternates: {
    canonical: "https://ivanrebolledo.dev",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ivan Rebolledo",
              alternateName: ["Ivan Robolledo", "Evan Rebolledo"],
              url: "https://ivanrebolledo.dev",
              jobTitle: "Front-End Developer",
              description:
                "Ivan Rebolledo is a Front-End Developer specializing in React, Next.js, TypeScript, Material UI, and Tailwind CSS.",
              sameAs: [
                "https://www.linkedin.com/in/ivan-rebolledo-012b17244/",
                "https://github.com/ivannissimrch",
              ],
            }),
          }}
        />
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
