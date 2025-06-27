import type { Metadata } from "next";
import { Outfit, Pacifico } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const headerFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-header",
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Adivina las comunidades y provincias de España - Juego interactivo",
  description:
    "Juego interactivo para adquirir conocimientos sobre comunidades y provincias de España",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${headerFont.variable} ${bodyFont.variable} antialiased`}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
