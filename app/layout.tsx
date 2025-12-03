import type { Metadata } from "next";
import { plusJakartaSans } from "./font";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Intego Business Company",
  description: "Created and first built by Pinsoe Gustave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable}`} suppressHydrationWarning>
        <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
      </body>
    </html>
  );
}
