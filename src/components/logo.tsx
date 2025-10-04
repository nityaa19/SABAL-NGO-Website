import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <Image 
        src="/logo.jpg" 
        alt="SABAL Logo" 
        width={40} 
        height={40} 
        className="rounded-full object-cover transition-transform group-hover:scale-110"
      />
      <span className="text-xl font-bold tracking-tight text-foreground font-headline">
        SABAL - एक सामाजिक संस्था
      </span>
    </Link>
  );
}
