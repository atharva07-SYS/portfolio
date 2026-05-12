import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Atharva Padalghare — Full Stack Developer & UI/UX Designer",
  description:
    "Full Stack Developer, UI/UX Designer & Digital Craftsman building complete digital products from robust backend systems to effortless interfaces.",
  keywords: [
    "Atharva Padalghare",
    "Full Stack Developer",
    "UI/UX Designer",
    "Next.js",
    "React",
    "portfolio",
  ],
  authors: [{ name: "Atharva Padalghare" }],
  openGraph: {
    title: "Atharva Padalghare — Full Stack Developer & UI/UX Designer",
    description:
      "Full Stack Developer, UI/UX Designer & Digital Craftsman building complete digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
