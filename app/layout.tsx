import type { Metadata, Viewport } from "next";
import { Boldonse, Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteDescription, siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const boldonse = Boldonse({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-boldonse",
  adjustFontFallback: false,
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Govern — Global payments",
    template: "%s | Govern",
  },
  description: siteDescription,
  applicationName: "Govern",
  authors: [{ name: "Govern Ltd" }],
  creator: "Govern Ltd",
  publisher: "Govern Ltd",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#043D6E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        boldonse.variable,
        geist.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full w-full flex flex-col overflow-x-clip">{children}</body>
    </html>
  );
}
