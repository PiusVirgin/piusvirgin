import type { Metadata } from "next";
import "./globals.css";
import "react-country-state-city/dist/react-country-state-city.css";


import { inter, bauhaus, gotham, spaceGrotesk } from "@/fonts/fonts";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "@/components/providers/session-provider";

export const metadata: Metadata = {
  title: "PIUSVIRGIN",
  description: "PIUSVIRGIN Logistics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bauhaus.variable} ${gotham.variable} ${spaceGrotesk.variable}`}
      >
        <AuthProvider>
          {children}
          <Toaster richColors />
        </AuthProvider>
      </body>
    </html>
  );
}
