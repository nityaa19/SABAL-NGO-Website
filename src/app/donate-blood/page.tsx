import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function DonateBloodPage() {
  const bloodDonationImage = PlaceHolderImages.find((img) => img.id === 'blood-donation-hero');

  const faqItems = [
    {
      id: 'why-donate',
      question: 'Why is donating blood so important?',
      answer: 'Donating blood is a simple act of generosity that saves lives. A single donation can help up to three different people. It is essential for surgeries, cancer treatment, chronic illnesses, and traumatic injuries. Your donation ensures that a stable supply of blood is available for patients in need.',
    },
    {
      id: 'eligibility',
      question: 'Am I eligible to donate blood?',
      answer: 'To be eligible, you must be in good health, weigh at least 110 lbs (50 kg), and be at least 17 years old (or 16 with parental consent in some areas). You should not have any tattoos or piercings from an unregulated facility within the last 3 months. Other medical conditions may affect your eligibility, so a brief health screening is conducted before every donation.',
    },
    {
      id: 'process',
      question: 'What is the donation process like?',
      answer: "The process is safe and simple. It includes registration, a mini-physical (checking temperature, blood pressure, and hemoglobin), the donation itself (which takes about 8-10 minutes), and a short rest with refreshments. The entire process takes about an hour.",
    },
     {
      id: 'after-donation',
      question: 'What should I do after donating?',
      answer: "After donating, you should drink extra fluids and avoid strenuous physical activity for the rest of the day. Enjoy the feeling of knowing you've helped save a life!",
    },
  ];

  return (
    <div>
      <section className="relative h-[50vh] w-full">
         {bloodDonationImage && (
          <Image
            src={bloodDonationImage.imageUrl}
            alt={bloodDonationImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={bloodDonationImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">Give the Gift of Life</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Your donation is a lifeline for someone in need. Join us and make a difference.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full mt-8" defaultValue="why-donate">
                {faqItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-lg font-headline text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="md:col-span-2">
              <div className="p-8 rounded-lg bg-secondary sticky top-24">
                <h3 className="text-2xl font-bold font-headline">Ready to Donate?</h3>
                <p className="mt-4 text-muted-foreground">
                  Find a local donation center or register for one of our upcoming blood drives. Your contribution is invaluable.
                </p>
                <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/>
                        <span>Be a hero in your community.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/>
                        <span>The process is quick, safe, and easy.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-1 shrink-0"/>
                        <span>Receive a free health screening.</span>
                    </li>
                </ul>
                <Button size="lg" className="w-full mt-8">
                  Find a Donation Center
                </Button>
                <p className="text-xs text-center mt-2 text-muted-foreground">
                    (This is a demo. No external link.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
