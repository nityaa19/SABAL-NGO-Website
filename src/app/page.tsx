import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const objectiveImage = PlaceHolderImages.find((img) => img.id === 'objective-image');
  const missionImage = PlaceHolderImages.find((img) => img.id === 'mission-image');
  const visionImage = PlaceHolderImages.find((img) => img.id === 'vision-image');
  
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
      <section className="bg-background">
        <div className="container mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tight">
            Let’s be a Volunteer of
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            {values.map((value) => (
              <span key={value.title} className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-primary">{value.title}</span>
            ))}
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according to their poverties-linked issues.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Join Us</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
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

      <section id="objective" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              {objectiveImage && (
                <Image
                  src={objectiveImage.imageUrl}
                  alt={objectiveImage.description}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={objectiveImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Objective</h2>
              <p className="mt-4 text-lg text-muted-foreground text-justify">
                SABAL – Social Activities Bring Ability & Liberty is a social developmental organization. It’s a non-government, non-profitable organization working for social development of vulnerable and less developed people. It was established by a group of young and energetic people who were highly motivated and committed for contributing their time, skills and energies for the development and empowerment of social disadvantages and vulnerable communities in our society and addressing all the social causes which bars them from their development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
               {missionImage && (
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={missionImage.imageHint}
                />
              )}
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground text-justify">
                SABAL’s mission is to work for the development and empowerment of socio-economically disadvantaged and vulnerable people in our society and help them according their poverty–linked issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
               {visionImage && (
                <Image
                  src={visionImage.imageUrl}
                  alt={visionImage.description}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  data-ai-hint={visionImage.imageHint}
                />
              )}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground text-justify">
                To inspire and equip masses to reach their divine potential. We believe that only unity can change the destiny of nation, it kills poverty, hunger, injustice and discrimination of all sorts and all human beings can enjoy their basic rights. SABAL envisions a poverty free empowered nation and bring equality and accountability in our society.
              </p>
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
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
