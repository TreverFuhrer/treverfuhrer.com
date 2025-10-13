import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

// const PhysicsCanvas = dynamic(() => import("@/components/PhysicsCanvas"), { ssr: false });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trever Fuhrer",
  description: "Links, projects, and résumé.",
  openGraph: {
    title: "Trever Fuhrer",
    description: "Links, projects, and résumé.",
    images: ["/og.png"], // put /public/og.png later if you want
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="relative min-h-dvh">
          {
          
          /* Physics layer goes behind all content.
          <div className="pointer-events-none absolute inset-0 z-0">
            <PhysicsCanvas />
          </div>
          */
          
          }
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}