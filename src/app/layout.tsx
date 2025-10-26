import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U2CleanPro - Jasa Kebersihan Profesional",
  description: "Layanan kebersihan profesional untuk rumah, kantor, dan kebutuhan khusus lainnya. Terpercaya dan ramah lingkungan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>{children}</body>
    </html>
  );
}
