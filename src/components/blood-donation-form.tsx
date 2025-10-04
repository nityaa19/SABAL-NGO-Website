'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitBloodDonationForm, type BloodDonationFormState } from '@/app/donate-blood/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from './ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import React from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full" size="lg">
      {pending ? 'Registering...' : 'Register Now'}
    </Button>
  );
}

export default function BloodDonationForm() {
  const initialState: BloodDonationFormState = { message: '', errors: {}, success: false };
  const [state, formAction] = useActionState(submitBloodDonationForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [dob, setDob] = useState<Date>();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Registration Successful!',
        description: state.message,
      });
      formRef.current?.reset();
      setDob(undefined);
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: 'Error',
        description: 'Please check the form for errors and try again.',
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      
      <div>
        <Label htmlFor="fullName">Full Name | पूरा नाम</Label>
        <Input id="fullName" name="fullName" type="text" placeholder="अपना पूरा नाम यहाँ लिखें" required />
        {state.errors?.fullName && <p className="text-sm text-destructive mt-1">{state.errors.fullName[0]}</p>}
      </div>
      
      <div>
        <Label htmlFor="email">Email | ईमेल</Label>
        <Input id="email" name="email" type="email" placeholder="अपना ईमेल यहाँ लिखें" required />
        {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="dob">DoB | जन्म तिथि</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !dob && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dob ? format(dob, "PPP") : <span> अपनी जन्मतिथि यहाँ लिखें</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={dob}
                onSelect={setDob}
                captionLayout="dropdown-buttons"
                fromYear={1950}
                toYear={new Date().getFullYear() - 18}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Input type="hidden" name="dob" value={dob?.toISOString()} />
          {state.errors?.dob && <p className="text-sm text-destructive mt-1">{state.errors.dob[0]}</p>}
        </div>
        
        <div>
          <Label htmlFor="bloodGroup">Blood Group | ब्लड ग्रुप</Label>
           <Select name="bloodGroup" required>
            <SelectTrigger id="bloodGroup">
              <SelectValue placeholder="Select your blood group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A+">A+ ( A Positive ) ( ए पोजेटिव )</SelectItem>
              <SelectItem value="A-">A- ( A Negative )</SelectItem>
              <SelectItem value="B+">B+ ( B Positive )</SelectItem>
              <SelectItem value="B-">B- ( B Negative )</SelectItem>
              <SelectItem value="AB+">AB+ ( AB Positive )</SelectItem>
              <SelectItem value="AB-">AB- ( AB Negative )</SelectItem>
              <SelectItem value="O+">O+ ( O Positive )</SelectItem>
              <SelectItem value="O-">O- ( O Negative )</SelectItem>
              <SelectItem value="Unknown">Don't Know</SelectItem>
            </SelectContent>
          </Select>
          {state.errors?.bloodGroup && <p className="text-sm text-destructive mt-1">{state.errors.bloodGroup[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="whatsapp">WhatsApp No. | वाट्सएप नंबर</Label>
          <Input id="whatsapp" name="whatsapp" type="tel" placeholder="अपना वाट्सएप मोबाइल नंबर यहाँ लिखें" />
           {state.errors?.whatsapp && <p className="text-sm text-destructive mt-1">{state.errors.whatsapp[0]}</p>}
        </div>
        <div>
          <Label htmlFor="mobile">Mobile No. | मोबाइल नंबर</Label>
          <Input id="mobile" name="mobile" type="tel" placeholder="अपना मोबाइल नंबर यहाँ लिखें" required />
          {state.errors?.mobile && <p className="text-sm text-destructive mt-1">{state.errors.mobile[0]}</p>}
        </div>
      </div>
      
      <div>
        <Label htmlFor="address">Full Address | पूरा पता</Label>
        <Textarea id="address" name="address" placeholder="अपना पूरा पता यहाँ लिखें" rows={4} required />
        {state.errors?.address && <p className="text-sm text-destructive mt-1">{state.errors.address[0]}</p>}
      </div>
      
      {state.success && (
        <Alert variant="default" className='bg-green-100 border-green-400 text-green-700'>
          <Terminal className="h-4 w-4 !text-green-700" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      
      <SubmitButton />
    </form>
  );
}
