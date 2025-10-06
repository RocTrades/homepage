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
  title: "RocTrades | Student-to-Student Marketplace (Mobile App)",
  description:
    "RocTrades is a mobile app for University of Rochester students to buy, sell, and trade on campus.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RocTrades – Mobile App",
    description:
      "RocTrades is a mobile app for University of Rochester students to buy, sell, and trade on campus.",
    type: "website",
    siteName: "RocTrades",
  },
  twitter: {
    card: "summary_large_image",
    title: "RocTrades – Mobile App",
    description:
      "RocTrades is a mobile app for University of Rochester students to buy, sell, and trade on campus.",
  },
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
        {children}
      </body>
    </html>
  );
}
