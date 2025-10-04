import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Eye, Goal, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'volunteer-hero');

  const values = [
    {
      title: 'HUMANITY',
    },
    {
      title: 'RESPONSIBILITY',
    },
    {
      title: 'SABAL',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[70vh] md:h-[90vh] w-full">
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
           <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Let’s be a Volunteer of
          </h1>
           <div className="flex flex-col md:flex-row gap-4 mt-4">
            {values.map((value) => (
              <span key={value.title} className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary">{value.title}</span>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-primary-foreground/90">
            SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according to their poverties-linked issues.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/donate-blood">Donate</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="objective" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary">Objective</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                SABAL – Social Activities Bring Ability & Liberty is a social developmental organization. It’s a private non-profitable organization working for social development of vulnerable and less developed people. It was established by a group of young and energetic people who were highly motivated and committed for contributing their time, skills and energies for the development and empowerment of social disadvantages and vulnerable communities in our society and addressing all the social causes which bars them from their.
              </p>
            </div>
             <div className="flex justify-center">
               <Users className="h-48 w-48 text-primary opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="flex justify-center order-2 md:order-1">
               <Goal className="h-48 w-48 text-background opacity-50" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Mission</h2>
              <p className="mt-4 text-lg">
                SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according their poverty – linked issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold" style={{color: '#938372'}}>Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To inspire and equip masses to reach their divine potential. We believe that only unity can change the destiny of nation, it kills poverty, hunger, injustice and discrimination of all sorts and all human beings can enjoy their basic rights. SABAL envisions a poverty free empowered nation and bring equality and accountability in our society.
              </p>
            </div>
             <div className="flex justify-center">
               <Eye className="h-48 w-48 text-primary opacity-20" />
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
