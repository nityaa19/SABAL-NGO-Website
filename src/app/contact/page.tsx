import ContactForm from '@/components/contact-form';
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
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 text-primary mt-1">{icon}</div>
      <div>
        <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-secondary/40">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;d love to hear from you! Whether you have a question, a suggestion, or want to get involved, please reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold font-headline mb-8">Send a Message</h2>
            <ContactForm />
          </div>

          <div className="space-y-10 mt-2">
            <InfoCard icon={<MapPin className="h-7 w-7" />} title="Visit Us">
              <p className="text-muted-foreground text-base leading-relaxed">
                Govind Nagar, Ward no. 3, Near Galaxy Convent School, Takiya, Sasaram, Rohtas,(Bihar) 821113
              </p>
            </InfoCard>

            <InfoCard icon={<Phone className="h-7 w-7" />} title="Call Us">
              <div className="space-y-3">
                {officeContacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <a href={`tel:${contact.value}`} className="text-base text-muted-foreground hover:text-primary transition-colors duration-300">
                      <span className="font-semibold text-foreground">{contact.label}:</span> {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </InfoCard>

            <InfoCard icon={<Mail className="h-7 w-7" />} title="Email Us">
              <div className="space-y-3">
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
            <div className="rounded-lg overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-primary/20">
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
