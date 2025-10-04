import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/donate-blood', label: 'Donate Blood' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting Hearts, Building Communities.
            </p>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold font-headline tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold font-headline tracking-wider text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
               <li className="flex items-start gap-2">
                 <MapPin className="h-4 w-4 mt-1 shrink-0" />
                 <span>Govind Nagar, Ward no. 3, Sasaram, Bihar 821113</span>
               </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+918936855589" className="hover:text-primary transition-colors">+91-8936855589</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:sabalngo21@gmail.com" className="hover:text-primary transition-colors">sabalngo21@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h3 className="font-bold font-headline tracking-wider text-foreground">Follow Us</h3>
            <div className="flex mt-4 space-x-2">
              {socialLinks.map(({ href, icon, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-transform duration-300 hover:scale-110">
                  <a href={href} aria-label={label}>
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SABAL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
