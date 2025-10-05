import ContactForm from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function ContactPage() {
  const officeContacts = [
    { value: '+91-8936855589', label: 'Office' },
    { value: '+91-8210042396', label: 'Office' },
    { value: '+91-8987162005', label: 'Blood' },
    { value: '+91-8987162006', label: 'Food' },
  ];

  const emailContacts = [
    { value: 'sabalngo21@gmail.com' },
    { value: 'contact@sabal.in' },
  ];

  const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        <div className="p-3 bg-primary/10 rounded-full">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-secondary/20">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;d love to hear from you! Whether you have a question, a suggestion, or want to get involved, please reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-3 bg-background p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold font-headline mb-8">Send a Message</h2>
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <InfoCard icon={<MapPin className="h-7 w-7 text-primary" />} title="Visit Us">
              <p className="text-muted-foreground text-base leading-relaxed">
                Govind Nagar, Ward no. 3, Near Galaxy Convent School, Takiya, Sasaram, Rohtas,(Bihar) 821113
              </p>
            </InfoCard>

            <InfoCard icon={<Phone className="h-7 w-7 text-primary" />} title="Call Us">
              <div className="space-y-4">
                {officeContacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <a href={`tel:${contact.value}`} className="text-base text-muted-foreground hover:text-primary transition-colors duration-300">
                      <span className="font-semibold text-foreground">{contact.label}:</span> {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={<Mail className="h-7 w-7 text-primary" />} title="Email Us">
              <div className="space-y-4">
                {emailContacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <a href={`mailto:${contact.value}`} className="text-base text-muted-foreground hover:text-primary transition-colors duration-300">
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </div>
        
        <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-8">Our Location</h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary/20">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.153790765455!2d84.0143741!3d24.9608817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db7ebb26b71b1%3A0xecea88f197d18f5f!2sSABAL!5e0!3m2!1sen!2sin!4v1759600912202!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                 </iframe>
            </div>
        </div>
      </div>
    </div>
  );
}
