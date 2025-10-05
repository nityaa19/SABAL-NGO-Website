import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './logo';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/donate-blood', label: 'Donate Blood' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

const legalLinks = [
    { href: '/terms-and-conditions', label: 'Terms & Condition' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/refund-and-cancellation-policy', label: 'Refund & Cancellation Policy' },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com/sabal.sasaram', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting Hearts, Building Communities.
            </p>
             <div className="flex mt-4 space-x-2">
              {socialLinks.map(({ href, icon, label }) => (
                <Button key={label} variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-transform duration-300 hover:scale-110">
                  <a href={href} aria-label={label} target='_blank' rel='noopener noreferrer'>
                    {icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold font-headline tracking-wider text-foreground">Quick Links</h3>
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
           <div>
            <h3 className="font-semibold font-headline tracking-wider text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold font-headline tracking-wider text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
               <li className="flex items-start gap-3">
                 <MapPin className="h-4 w-4 mt-1 shrink-0 text-primary" />
                 <span>Govind Nagar, Ward no. 3, Sasaram, Bihar 821113</span>
               </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+918936855589" className="hover:text-primary transition-colors">+91-8936855589</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:sabalngo21@gmail.com" className="hover:text-primary transition-colors">sabalngo21@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SABAL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
