import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make a Donation | SABAL',
  description: 'Support SABAL\'s mission by making a donation. Your contribution helps us empower communities and continue our social development work.',
  keywords: ['donate', 'donation', 'support SABAL', 'charity', 'non-profit donation'],
};


export default function DonatePage() {
  return (
    <div className="bg-background animate-fadeIn">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold animate-slideUp">Make a Donation</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground animate-slideUp delay-200">
            Your contribution helps us continue our mission to empower communities.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <CardHeader className="items-center text-center">
              <Construction className="h-16 w-16 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Donation Page Under Construction</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Our team is currently setting up a secure donation portal. Please check back soon to make a contribution. Thank you for your support!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
