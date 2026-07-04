import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";

import { NotificationListener } from "@/components/notifications/notification-listener";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SwasthSetu",
  description: "AI-Powered Hospital & Equipment Management for Patient Care Coordination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSans.variable}`}>
      <body>
        <div className="app-shell">{children}</div>
        <NotificationListener />
        <Toaster />
      </body>
    </html>
  );
}
