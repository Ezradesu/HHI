import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className={`${stackSansHeadline.className} min-h-full bg-[#fff5f5] antialiased`}>
        {children}
      </body>
    </html>
  );
}
