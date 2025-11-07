'use client';

import { useState, useRef, FormEvent } from 'react';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/contact/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    const validatedFields = contactFormSchema.safeParse(data);

    if (!validatedFields.success) {
      const newErrors = validatedFields.error.flatten().fieldErrors;
      setErrors(newErrors);
      toast({
        variant: "destructive",
        title: 'Validation Error',
        description: 'Please check the form for errors and try again.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitContactForm(validatedFields.data);
      
      if (result.success) {
        setSuccess(true);
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. We will get back to you soon!',
        });
        formRef.current?.reset();
      } else {
        throw new Error(result.message || 'An unknown error occurred.');
      }
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: error.message || "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="Your Name" required />
        {errors?.name && <p className="text-sm text-destructive mt-1">{errors.name[0]}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
        {errors?.email && <p className="text-sm text-destructive mt-1">{errors.email[0]}</p>}
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" placeholder="How can we help?" required />
        {errors?.subject && <p className="text-sm text-destructive mt-1">{errors.subject[0]}</p>}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
        {errors?.message && <p className="text-sm text-destructive mt-1">{errors.message[0]}</p>}
      </div>
      
      {success && (
        <Alert variant="default" className='bg-green-100 border-green-400 text-green-700'>
          <Terminal className="h-4 w-4 !text-green-700" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your message has been sent successfully.</AlertDescription>
        </Alert>
      )}
      
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Send Message'}
      </Button>
    </form>
  );
}
