import Link from 'next/link';
import { HandHeart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
        <HandHeart className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
      </div>
      <span className="text-xl font-bold tracking-tight text-foreground font-headline">
        SABAL - एक सामाजिक संस्था
      </span>
    </Link>
  );
}
