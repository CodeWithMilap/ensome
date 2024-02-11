import type { Metadata } from "next";
import { Inter, Manrope, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});
const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ensome Template",
  description: "Ensome template in next js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${opensans.variable} font-opensans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
