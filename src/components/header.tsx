'use client';

import Logo from './logo';

export default function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />
      </div>
    </header>
  );
}
