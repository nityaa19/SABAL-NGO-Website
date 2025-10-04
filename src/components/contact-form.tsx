'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, type FormState } from '@/app/contact/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const initialState: FormState = { message: '', errors: {}, success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" type="text" placeholder="Your Name" required />
        {state.errors?.name && (
          <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
        {state.errors?.email && (
          <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" type="text" placeholder="How can we help?" required />
        {state.errors?.subject && (
          <p className="text-sm text-destructive mt-1">{state.errors.subject[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required />
        {state.errors?.message && (
          <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>
        )}
      </div>
      
      {state.success && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      
      <SubmitButton />
    </form>
  );
}
