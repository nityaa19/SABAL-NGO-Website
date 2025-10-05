'use client';

import { Button } from './ui/button';
import Logo from './logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
            <Link href="/donate">Donate</Link>
        </Button>
      </div>
    </header>
  );
}
