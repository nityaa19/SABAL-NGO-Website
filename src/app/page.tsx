import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { HandHeart, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const features = [
    {
      icon: <HandHeart className="h-10 w-10 text-primary" />,
      title: 'Empower Communities',
      description: 'We work to uplift and empower socio-economically disadvantaged communities through various initiatives.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Promote Unity',
      description: 'We believe in the power of unity to overcome challenges like poverty, hunger, and discrimination.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Ensure Rights',
      description: 'Our mission is to ensure that all human beings can enjoy their basic rights and live with dignity.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[90vh] w-full">
        <Image
          src="/landing/herodesk.jpg"
          alt="SABAL volunteers working in the community"
          fill
          className="object-cover"
          priority
          data-ai-hint="community volunteers"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 space-y-6 px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight max-w-4xl">
            Bringing Ability and Liberty Through Social Action
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Join SABAL in our mission to create an empowered, poverty-free nation where every individual lives with dignity and justice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105 group">
              <Link href="/contact">Get Involved <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="transition-transform duration-300 hover:scale-105">
              <Link href="/donate-blood">Donate Blood</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Core Principles</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Driving change through empowerment, unity, and a commitment to justice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-0">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">{feature.icon}</div>
                  <CardTitle className="pt-4 text-2xl font-bold font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 items-center gap-12">
                 <div className="aspect-w-16 aspect-h-9">
                    <iframe
                    className="w-full h-full rounded-lg shadow-xl"
                    src="https://www.youtube-nocookie.com/embed/xyzsstAl2FA?si=0jKN44phQ-ztZjsu"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                    </iframe>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Watch Our Journey</h2>
                 <p className="text-lg text-muted-foreground text-justify">
                    Since 2016, SABAL has been dedicated to empowering communities and addressing social injustices. Our journey is one of passion, commitment, and the belief that together, we can build a more equitable society. Watch our video to see the impact of our work firsthand.
                  </p>
              </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Become a Part of the Change
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            Your support can make a huge difference. Join us in our mission to build a better tomorrow.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-background text-primary transition-transform duration-300 hover:scale-105 shadow-lg group">
            <Link href="/contact">Get Involved <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
