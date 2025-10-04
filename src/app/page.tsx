import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Let’s be a Volunteer of HUMANITY
          </h1>
          <h1 className="text-4xl md:text-[2.8rem] lg:text-5xl font-headline font-bold tracking-tight mt-2">
            Let’s be a Volunteer of RESPONSIBILITY
          </h1>
          <h2 className="mt-4 text-5xl md:text-6xl font-headline font-bold tracking-tight text-primary uppercase">
            Let’s be a Volunteer of SABAL
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according to their poverties-linked issues.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/donate-blood">Donate</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">About Us</h2>
            <p className="mt-6 text-lg text-muted-foreground text-justify">
              SABAL – Social Activities Bring Ability & Liberty – is a non-government, non-profitable social developmental organization established in 2016 by a group of young and passionate individuals. With a vision of building an empowered and poverty-free society, SABAL is dedicated to uplifting vulnerable and socio-economically disadvantaged communities.
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              Since its inception, SABAL has been committed to addressing the root causes that hinder social development, including poverty, hunger, injustice, and discrimination. Our mission is to empower marginalized groups by supporting them in overcoming poverty-linked challenges, ensuring that they gain equal opportunities to grow and thrive.
            </p>
            <p className="mt-4 text-lg text-muted-foreground text-justify">
              We strongly believe in the power of unity to bring about change. By inspiring and equipping people to reach their fullest potential, SABAL continues to work towards creating a society where equality, accountability, and human rights are not privileges but the foundation of everyday life.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {/* Objective Section */}
          <Card className="p-0 shadow-lg border-none overflow-hidden">
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
              <div className="relative min-h-[400px]">
                <Image
                  src="/landing-page/objective.jpg"
                  alt="Objective"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint="community project"
                />
              </div>
            </div>
          </Card>

          {/* Mission Section */}
          <Card className="p-0 shadow-lg border-none overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative min-h-[400px] order-last md:order-first">
                <Image
                  src="/landing-page/mission.jpg"
                  alt="Mission"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint="unity hands"
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
          <Card className="p-0 shadow-lg border-none overflow-hidden">
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
              <div className="relative min-h-[400px]">
                <Image
                  src="/landing-page/vision.jpg"
                  alt="Vision"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  data-ai-hint="hopeful sunrise"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Become a Part of the Change
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Your support can make a huge difference. Join us in our mission to build a better tomorrow.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
