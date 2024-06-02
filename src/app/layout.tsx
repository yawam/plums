import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/pages/Header";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { Router } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLUMS",
  description: "A Personal Learning Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}
