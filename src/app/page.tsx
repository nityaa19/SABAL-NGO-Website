import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Droplets, HeartPulse, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-community');
  const missionImage = PlaceHolderImages.find((img) => img.id === 'mission-image');

  const missionPoints = [
    {
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: 'Promoting Health',
      description: 'We are dedicated to improving community health through awareness campaigns, medical camps, and blood donation drives.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Building Community',
      description: 'Fostering a sense of unity and support by organizing cultural events, workshops, and social gatherings.',
    },
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: 'Saving Lives',
      description: 'Our blood donation initiatives connect generous donors with those in need, making a direct impact on saving lives.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Connecting Hearts, Building Communities
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            SABAL is a non-profit organization committed to social welfare, health awareness, and community development.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/donate-blood">Donate Blood</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mission</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              To empower individuals and strengthen our community through targeted initiatives in health, education, and social support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPoints.map((point) => (
              <Card key={point.title} className="text-center border-none shadow-lg bg-background hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full">{point.icon}</div>
                  <CardTitle className="pt-4 font-headline">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">What We Do</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SABAL actively engages in a variety of programs designed to make a tangible difference. From organizing life-saving blood donation camps to conducting health and wellness workshops, our goal is to create a healthier, more connected society.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We believe in the power of collective action and strive to provide platforms where everyone can contribute to the well-being of our community.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link href="/events">See Our Events</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              {missionImage && (
                 <Image
                    src={missionImage.imageUrl}
                    alt={missionImage.description}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-2xl object-cover aspect-[4/3]"
                    data-ai-hint={missionImage.imageHint}
                  />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Become a Part of the Change
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Your support can make a huge difference. Join us in our mission to build a better tomorrow.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
