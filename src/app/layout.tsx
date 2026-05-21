import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nivana Wellness Spa | Physician-Supervised Peptide Therapy & Longevity",
  description: "Pharmaceutical-grade peptide protocols for weight management, longevity, recovery, and cognitive health. Supervised by board-certified physicians, delivered discreetly.",
  metadataBase: new URL("https://nivanawellness.com"),
  openGraph: {
    title: "Nivana Wellness Spa | Physician-Supervised Peptide Therapy",
    description: "Personalized peptide protocols for longevity, recovery, and metabolic wellness under clinical supervision.",
    siteName: "Nivana Wellness Spa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F4EC] text-[#2A2520]">
        <Navigation />
        <main className="flex-grow pt-[76px] lg:pt-[84px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
