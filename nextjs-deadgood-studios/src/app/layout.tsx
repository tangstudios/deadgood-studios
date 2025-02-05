import RealTimeClock from "@/components/clock/RealTimeClock";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dead Good Studios",
  description: "Film Studio & Creative Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-1`}
      >
        <div className="sticky top-0 flex justify-end flex-row">
          <RealTimeClock />
        </div>
        {children}
      </body>
    </html>
  );
}
