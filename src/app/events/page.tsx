import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Upcoming Events</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Stay tuned for our schedule of upcoming community events, workshops, and drives.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-2xl transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <CardHeader className="items-center text-center">
              <Construction className="h-16 w-16 text-primary" />
              <CardTitle className="text-2xl font-headline pt-4">Page Under Construction</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                Our team is working hard to bring you the latest updates on our events. Please check back soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
