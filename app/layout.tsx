import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  icons: {
    icon: "/logo/R_logo_v2.png",
    shortcut: "/logo/R_logo_v2.png",
    apple: "/logo/R_logo_v2.png",
  },
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
        <div className="min-h-screen flex flex-col">
          <div className="flex-1">{children}</div>
          <footer className="w-full border-t border-black/10">
            <div className="mx-auto max-w-3xl px-6 py-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm">
              <span className="text-foreground/60">© {new Date().getFullYear()} RocTrades</span>
              <nav className="flex items-center gap-4">
                <Link className="underline text-foreground/80 hover:text-foreground" href="/guides">Guides</Link>
                <Link className="underline text-foreground/80 hover:text-foreground" href="/privacy-policy">Privacy Policy</Link>
                <Link className="underline text-foreground/80 hover:text-foreground" href="/terms-of-service">Terms of Service</Link>
                <span className="text-foreground/80">contact@roctrades.com</span>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
