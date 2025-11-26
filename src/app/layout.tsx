import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "U2CleanPro - Jasa Kebersihan Profesional",
  description:
    "Layanan kebersihan profesional untuk rumah, kantor, dan kebutuhan khusus lainnya. Terpercaya dan ramah lingkungan.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
