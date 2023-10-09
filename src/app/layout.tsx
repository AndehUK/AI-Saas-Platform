import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { LayoutProps } from "@/types/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ExIntelligence",
  description: "A multi-purpose AI platform.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
