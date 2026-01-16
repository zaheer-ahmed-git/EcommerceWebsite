import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Crescent Saline",
    template: "%s | Crescent Saline",
  },
  description:
    "Crescent Saline lists cooking and home salt products. Online checkout is not open yet. Request a product and we reply by email.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
