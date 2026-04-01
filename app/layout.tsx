import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alam Ozuna | Data Analyst Portfolio",
  description: "Senior Data Analyst specialized in Excel, Tableau, and Power BI. Transforming raw data into high-end narrative artifacts.",
  keywords: ["Data Analyst", "Portfolio", "Excel", "Tableau", "Power BI", "Data Visualization", "Bento Grid"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="font-sans min-h-screen bg-background text-foreground scroll-smooth">
        {children}
      </body>
    </html>
  );
}
