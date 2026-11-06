import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SiteLayout } from "@/components/SiteLayout";
import { siteConfig } from "@/config/site";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mzbutterfoods.com"),
  title: {
    default: `${siteConfig.name} | 100% Pure Butter, Fresh Cream & Desi Ghee`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pure Butter",
    "Fresh Dairy Cream",
    "Desi Ghee",
    "Danedar Desi Ghee",
    "Bilona Cow Ghee",
    "Chocolate Butter Spread",
    "MZ Butter",
    "Fresh Dairy Delivery",
    "Karachi Fresh Dairy",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} - Pure Dairy Artisans`,
    description: siteConfig.description,
    url: "https://mzbutterfoods.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: siteConfig.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth ${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <SiteLayout>{children}</SiteLayout>
        </CartProvider>
      </body>
    </html>
  );
}
