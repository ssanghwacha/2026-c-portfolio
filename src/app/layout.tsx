import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Script from "next/script";
import "./globals.css";

const rethink = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Sangwha Cha — Designer",
  description:
    "Designer in Vancouver, shaping brands and digital products with a refined eye for systems and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rethink.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${rethink.className} min-h-screen antialiased bg-white text-black dark:bg-[#1E1E1E] dark:text-[#E6E6E6]`}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
