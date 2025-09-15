import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row h-screen">
          <div className="hidden md:block md:w-[28%] max-h-screen sticky top-0 overflow-y-auto">
            <Sidebar />
          </div>
          <div className="block md:hidden fixed w-full top-0 z-50">
            <Navbar />
          </div>
          <main className="flex-1 md:pt-0 md:overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
