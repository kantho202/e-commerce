import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import ClientWrapper from "./ClientWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: { default: "Luxoria — Premium E-Commerce", template: "%s | Luxoria" },
  description: "Discover curated luxury products. Shop the finest collections with fast delivery and premium service.",
  keywords: ["luxury", "ecommerce", "shop", "premium", "fashion"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luxoria",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base-100 text-base-content">
        <ClientWrapper>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
