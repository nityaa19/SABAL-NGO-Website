import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BadgeCheck, Building, Eye, Goal, Target } from 'lucide-react';
import Image from 'next/image';

const highlightedKeywords = [
    'non-government', 'non-profitable', 'development',
    'socio-economically', 'unity', 'poverty', 'hunger', 'injustice', 'discrimination'
];

const highlightText = (text: string) => {
    const parts = text.split(new RegExp(`(#\\w+)`, 'gi'));
    return parts.map((part, index) => {
        if (highlightedKeywords.includes(part.replace('#', ''))) {
            return <span key={index} className="text-primary font-semibold">{part.replace('#', '')}</span>;
        }
        if (part.startsWith('#')) {
             return <span key={index} className="text-primary font-semibold">{part.replace('#', '')}</span>;
        }
        return part;
    });
};

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(img => img.id === 'vision-image');
    const sections = [
        {
            icon: <Target className="h-10 w-10 text-primary" />,
            title: "Objective",
            description: "SABAL – Social Activities Bring Ability & Liberty is a social developmental organization. It’s  a  #non-government,  #non-profitable organization working for social development of vulnerable and less developed people. It was established by a group of young and energetic people who were highly motivated and committed for  contributing their time, skills and energies for the development and empowerment of social disadvantages  and vulnerable communities in our society and addressing all the social causes which bars them from their #development"
        },
        {
            icon: <Goal className="h-10 w-10 text-primary" />,
            title: "Mission",
            description: "SABAL’s mission is to work for the development and empowerment of #socio-economically disadvantaged and vulnerable people in our society and help them according their poverty – linked issues"
        },
        {
            icon: <Eye className="h-10 w-10 text-primary" />,
            title: "Vision",
            description: "To inspire and equip masses to reach their divine potential. We believe that only #unity can change the destiny of nation, it kills #poverty, #hunger, #injustice and #discrimination of all sorts and all human beings can enjoy their basic rights. SABAL envisions a poverty free empowered nation and bring equality and accountability in our society."
        }
    ];

    const registrationDetails = [
        {
            icon: <Building className="h-8 w-8 text-primary" />,
            title: "Our Existence Since 2K16",
            description: "SABAL was established in the year 2016. We are registered body since 2018 under the society registration act 21 of 1860 of govt. of India in Patna, Bihar."
        },
        {
            icon: <BadgeCheck className="h-8 w-8 text-primary" />,
            title: "Registration No.",
            description: "S000939"
        },
        {
            icon: <BadgeCheck className="h-8 w-8 text-primary" />,
            title: "NITI Aayog Registration No.",
            description: "BR/2018/0198130"
        }
    ]

  return (
    <div className="bg-background">
      <section className="relative h-[50vh] w-full">
        {aboutImage && (
            <Image
                src={aboutImage.imageUrl}
                alt="About Us Hero"
                fill
                className="object-cover"
                priority
                data-ai-hint="hopeful people"
            />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl font-headline">About SABAL</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Learn about our mission, vision, and commitment to building a better society.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-1">
          {sections.map((section) => (
            <Card key={section.title} className="transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <CardHeader className="items-center text-center">
                <div className="rounded-full bg-primary/10 p-4">{section.icon}</div>
                <CardTitle className="pt-4 text-3xl font-headline">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-lg text-muted-foreground">
                <p>{highlightText(section.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl font-headline">
                Our History & Registration
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
                {registrationDetails.map(detail => (
                    <Card key={detail.title} className="text-center transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <CardHeader className="items-center">
                           {detail.icon}
                            <CardTitle className='pt-2'>{detail.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{detail.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
