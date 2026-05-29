import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import ParticleCanvas from "@/components/ParticleCanvas";

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
  title: "VALARA Rx | Physician-Supervised Peptide Restoration & Longevity",
  description: "Pharmaceutical-grade peptide protocols and cellular nutrition. Supervised by U.S. board-certified physicians, delivered discreetly to your door.",
  metadataBase: new URL("https://valararx.com"),
  openGraph: {
    title: "VALARA Rx | Physician-Supervised Peptide Restoration",
    description: "Personalized peptide protocols for longevity, recovery, and metabolic wellness under clinical supervision.",
    siteName: "VALARA Rx",
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
      <body className="min-h-full flex flex-col bg-[#0B0A09] text-[#F7F2EC] relative overflow-x-hidden">
        {/* Global WebGL Asset Loader */}
        <PageLoader />

        {/* Global WebGL Interactive Particle Canvas Backdrop */}
        <ParticleCanvas />

        {/* Interactive Cyber Grids & HUD Planes */}
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-30 cyber-grid opacity-80"></div>
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-35 cyber-dots opacity-40"></div>

        {/* Left and Right aesthetic side cockpit lines */}
        <div className="fixed top-0 bottom-0 left-4 lg:left-8 w-[0.5px] bg-white/5 pointer-events-none -z-25 hidden md:block"></div>
        <div className="fixed top-0 bottom-0 right-4 lg:right-8 w-[0.5px] bg-white/5 pointer-events-none -z-25 hidden md:block"></div>


        {/* Global Motion Wallpaper Video Loop */}
        <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden bg-[#0B0A09]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-35"
          >
            <source src="/videos/peptide_skin.mp4" type="video/mp4" />
          </video>
          {/* Subtle brand color gradient overlays to blend the motion video background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0A09]/95 via-[#0B0A09]/80 to-[#E8B29A]/12"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0A09]/45 to-[#0B0A09]"></div>
        </div>

        <Navigation />
        <main className="flex-grow pt-[76px] lg:pt-[84px] relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
