
import { Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.className}>
      <head />
      <body className="font-sans">
        <ClientLayout>
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}