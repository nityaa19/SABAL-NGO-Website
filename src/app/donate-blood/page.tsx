import BloodDonationForm from '@/components/blood-donation-form';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DonateBloodPage() {
  const bloodDonationImage = PlaceHolderImages.find((img) => img.id === 'blood-donation-hero');

  return (
    <div>
      <section className="relative h-[60vh] w-full">
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
          <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            रक्तदान इन्सानियत की पहचान, आइए मिलकर करें रक्तदान
          </h1>
          <p className="mt-4 max-w-2xl text-2xl md:text-3xl text-primary-foreground/90 font-semibold">
            &quot; मिले खून मेरा तुम्हारा तो खून बने हमारा &quot;
          </p>
          <Button asChild size="lg" className="mt-8 transition-transform duration-300 hover:scale-105">
            <Link href="#register-form">Register Now | पंजीकरण करें</Link>
          </Button>
        </div>
      </section>

      <section id="register-form" className="py-16 md:py-24 bg-secondary/60">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start">

            <div className="lg:col-span-3 bg-background p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold font-headline mb-2">Blood Donation Registration</h2>
               <p className="text-muted-foreground mb-8">
                आपका नाम, मोबाइल नंबर और उम्र अनिवार्य है
              </p>
              <BloodDonationForm />
            </div>

            <div className="lg:col-span-2 space-y-6 bg-background/80 p-8 rounded-lg shadow-md sticky top-24">
              <h3 className="text-2xl font-bold font-headline">Registration Information</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className='pl-4 border-l-4 border-primary'>आपके पंजीकरण की पुष्टि आपके ईमेल के माध्यम से आपको भेजी जाएगी</li>
                <li className='pl-4 border-l-4 border-primary'>रक्तदान के लिए 18 वर्ष की आयु अनिवार्य है</li>
              </ul>
               <div>
                  <h4 className="font-semibold text-foreground mb-2">अधिक जानकारी के लिए कृपया संपर्क करें</h4>
                  <div className="flex items-center gap-3 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary"/>
                      <a href="tel:+918987162005" className="hover:text-primary">+91-8987162005</a>
                  </div>
                   <div className="flex items-center gap-3 mt-2 text-muted-foreground">
                      <Phone className="h-5 w-5 text-primary"/>
                      <a href="tel:+918987162006" className="hover:text-primary">+91-8987162006</a>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
