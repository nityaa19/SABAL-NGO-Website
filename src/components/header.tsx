'use client';

import Link from 'next/link';
import Logo from './logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60">
      <div className="container mx-auto flex h-20 items-center justify-center px-4">
        <Logo />
      </div>
    </header>
  );
}
