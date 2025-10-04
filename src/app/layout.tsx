import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: 'SABAL - एक सामाजिक संस्था',
  description: 'Connecting Hearts, Building Communities.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('font-body antialiased bg-background text-foreground', poppins.variable)}>
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
