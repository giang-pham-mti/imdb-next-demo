import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb clone",
  description: "This is a movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Common meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Page specific meta tags */}
        <title>Next.js SEO Example</title>
        <meta
          name="description"
          content="This is an example of SEO in Next.js."
        />
        <link rel="canonical" href="https://example.com" />

        {/* Open Graph tags for social media sharing */}
        <meta property="og:title" content="Next.js SEO Example" />
        <meta
          property="og:description"
          content="This is an example of SEO in Next.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:image" content="https://example.com/image.jpg" />

        {/* Twitter cards for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next.js SEO Example" />
        <meta
          name="twitter:description"
          content="This is an example of SEO in Next.js."
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
