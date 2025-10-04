import ContactForm from '@/components/contact-form';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Our Office',
      value: '123 Community Lane, Welfare City, 45678',
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: 'Phone',
      value: '(123) 456-7890',
    },
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: 'Email',
      value: 'contact@sabalconnect.org',
    },
  ];

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;d love to hear from you! Whether you have a question, a suggestion, or want to get involved, please reach out.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold font-headline mb-8">Contact Us</h2>
            <ContactForm />
          </div>

          <div className="space-y-8">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-full">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">{detail.title}</h3>
                  <p className="text-muted-foreground text-lg">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
