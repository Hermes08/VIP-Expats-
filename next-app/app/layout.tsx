import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { CMSProvider } from "@/context/CMSContext";
import { LanguageProvider } from "@/context/LanguageContext";
import MainLayout from "@/components/MainLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ExpatRockstars | Panama Real Estate & Investment Portal",
  description: "ExpatRockstars - Professional real estate portal for pre-construction, luxury beach resorts and mountain investment properties in Panama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased overflow-x-hidden selection:bg-brand-GOLD selection:text-brand-900 bg-brand-950`}
      >
        <LanguageProvider>
          <CMSProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </CMSProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
