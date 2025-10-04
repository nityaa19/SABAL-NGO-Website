'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/donate-blood', label: 'Donate Blood' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavLink = ({ href, label, isMobile = false, onClick }: { href: string; label: string; isMobile?: boolean; onClick?: () => void }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'relative text-sm font-medium transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:text-primary hover:after:scale-x-100',
          isActive ? 'text-primary after:scale-x-100' : 'text-muted-foreground',
          isMobile && 'text-lg'
        )}
      >
        {label}
      </Link>
    );
  }

  return (
    <nav className="sticky top-[80px] z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-center px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center gap-8">
              <NavLink href={link.href} label={link.label} />
              {index < navLinks.length - 1 && <Separator orientation="vertical" className="h-4" />}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex-grow flex justify-end">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                   <h3 className='font-bold text-lg'>Menu</h3>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <div className="mt-8 flex flex-col gap-8">
                  {navLinks.map(({ href, label }) => (
                     <NavLink 
                        key={href}
                        href={href}
                        label={label}
                        isMobile={true}
                        onClick={() => setMobileMenuOpen(false)}
                      />
                  ))}
                </div>
                <div className="mt-auto pt-6">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-transform duration-300 hover:scale-105">
                        <Link href="/donate-blood" onClick={() => setMobileMenuOpen(false)}>Donate Now</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
