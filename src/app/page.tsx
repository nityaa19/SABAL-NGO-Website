import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-2xl md:text-3xl font-headline tracking-tight">
            Let’s Be A Volunteer Of Responsibility
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-headline tracking-tight mt-2">
            Let’s Be A Volunteer Of Humanity
          </h1>
          <h2 className="mt-4 text-5xl md:text-7xl font-headline font-bold tracking-tight text-primary">
            Let’s Be A Volunteer Of SABAL
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according to their poverties-linked issues.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="/contact">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <Link href="/donate-blood">Donate</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="p-0 shadow-lg border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 text-center md:text-left">About Us</h2>
                <div className="text-sm text-muted-foreground text-justify space-y-3">
                  <p>
                    SABAL – Social Activities Bring Ability & Liberty – is a non-government, non-profitable social developmental organization established in 2016 by a group of young and passionate individuals. With a vision of building an empowered and poverty-free society, SABAL is dedicated to uplifting vulnerable and socio-economically disadvantaged communities.
                  </p>
                  <p>
                    Since its inception, SABAL has been committed to addressing the root causes that hinder social development, including poverty, hunger, injustice, and discrimination. Our mission is to empower marginalized groups by supporting them in overcoming poverty-linked challenges, ensuring that they gain equal opportunities to grow and thrive.
                  </p>
                  <p>
                    We strongly believe in the power of unity to bring about change. By inspiring and equipping people to reach their fullest potential, SABAL continues to work towards creating a society where equality, accountability, and human rights are not privileges but the foundation of everyday life.
                  </p>
                </div>
              </div>
              <div className="aspect-video p-4 md:p-8">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube-nocookie.com/embed/xyzsstAl2FA?si=0jKN44phQ-ztZjsu"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {/* Objective Section */}
          <Card className="p-0 shadow-lg border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 flex items-center">
                <Card className="h-full w-full shadow-md">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-headline font-bold">Objective</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground text-justify">
                      SABAL – Social Activities Bring Ability & Liberty is a social developmental organization. It’s a non-government, non-profitable organization working for social development of vulnerable and less developed people. It was established by a group of young and energetic people who were highly motivated and committed for contributing their time, skills and energies for the development and empowerment of social disadvantages and vulnerable communities in our society and addressing all the social causes which bars them from their development.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative min-h-[400px] w-full">
                <Image
                  src="/landing-page/objective.png"
                  alt="Objective"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>

          {/* Mission Section */}
          <Card className="p-0 shadow-lg border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative min-h-[400px] w-full order-last md:order-first">
                <Image
                  src="/landing-page/mission.png"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex items-center order-first md:order-last">
                <Card className="h-full w-full shadow-md">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-headline font-bold">Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground text-justify">
                      SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according their poverty–linked issues.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Card>
          
          {/* Vision Section */}
          <Card className="p-0 shadow-lg border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="p-8 md:p-12 flex items-center">
                <Card className="h-full w-full shadow-md">
                  <CardHeader>
                    <CardTitle className="text-3xl md:text-4xl font-headline font-bold">Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-muted-foreground text-justify">
                      To inspire and equip masses to reach their divine potential. We believe that only unity can change the destiny of nation, it kills poverty, hunger, injustice and discrimination of all sorts and all human beings can enjoy their basic rights. SABAL envisions a poverty free empowered nation and bring equality and accountability in our society.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative min-h-[400px] w-full">
                <Image
                  src="/landing-page/vision.png"
                  alt="Vision"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/80 to-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary-foreground">
            Become a Part of the Change
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
            Your support can make a huge difference. Join us in our mission to build a better tomorrow.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-background text-primary transition-transform duration-300 hover:scale-105 shadow-lg">
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
