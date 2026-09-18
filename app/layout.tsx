import type { Metadata } from "next";
import localFont from "next/font/local";
import { LoadingScreen } from "./components/LoadingScreen";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const stackSansHeadline = localFont({
  src: [
    { path: "./fonts/stack-sans-headline-300.ttf", weight: "300" },
    { path: "./fonts/stack-sans-headline-400.ttf", weight: "400" },
    { path: "./fonts/stack-sans-headline-500.ttf", weight: "500" },
    { path: "./fonts/stack-sans-headline-600.ttf", weight: "600" },
    { path: "./fonts/stack-sans-headline-700.ttf", weight: "700" },
  ],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Hidayat, Hendiry & Indrawan",
  description: "Hidayat, Hendiry & Indrawan law firm",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full", "font-sans", geist.variable)}>
      <body
        className={`${stackSansHeadline.className} min-h-full bg-[#fff5f5] antialiased`}
      >
        {children}
        <LoadingScreen />
      </body>
    </html>
  );
}
