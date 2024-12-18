import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
// import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Link from "next/link";

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Voice-to-Text",
  description: "Upload and transcribe your audio",
};

const RootLayout: FC<Readonly<RootLayoutProps>> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} antialiased`}>
          <div className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
            {/* Header */}
            <header className="bg-gray-800 p-4 text-center text-purple-400 text-2xl font-bold">
              Audio-to-Text App
            </header>
            {/* Main content */}
            <div className="flex flex-1 p-6">{children}</div>
            {/* Footer */}
            <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
              &copy; 2024 Audio-to-Text App. Coded by{" "}
              <Link
                href="https://iberezhnyi.vercel.app/"
                className="text-purple-400 hover:text-purple-300 underline transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener nofollow noreferrer"
              >
                iberezhnyi.
              </Link>{" "}
              All rights reserved.
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
