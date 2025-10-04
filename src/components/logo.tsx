import Link from 'next/link';
import { HandHeart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <HandHeart className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
      <span className="text-xl font-bold tracking-tight text-foreground font-headline">
        SABAL Connect
      </span>
    </Link>
  );
}
