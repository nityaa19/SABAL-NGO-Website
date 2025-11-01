'use client';

import { useState, useRef, FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { saveBloodDonation, bloodDonationSchema } from '@/app/donate-blood/actions';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar } from './ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function BloodDonationForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [dob, setDob] = useState<Date>();
  const [bloodGroup, setBloodGroup] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);
    setErrors({});

    const formData = new FormData(event.currentTarget);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      dob: dob?.toISOString(),
      bloodGroup: bloodGroup,
      whatsapp: formData.get('whatsapp'),
      mobile: formData.get('mobile'),
      address: formData.get('address'),
    };

    const validatedFields = bloodDonationSchema.safeParse(data);

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
      await saveBloodDonation(validatedFields.data);
      setSuccess(true);
      toast({
        title: 'Registration Successful!',
        description: 'Thank you for registering to donate blood!',
      });
      formRef.current?.reset();
      setDob(undefined);
      setBloodGroup('');
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      
      <div>
        <Label htmlFor="fullName">Full Name | पूरा नाम</Label>
        <Input id="fullName" name="fullName" type="text" placeholder="अपना पूरा नाम यहाँ लिखें" required />
        {errors?.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName[0]}</p>}
      </div>
      
      <div>
        <Label htmlFor="email">Email | ईमेल</Label>
        <Input id="email" name="email" type="email" placeholder="अपना ईमेल यहाँ लिखें" required />
        {errors?.email && <p className="text-sm text-destructive mt-1">{errors.email[0]}</p>}
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
          {errors?.dob && <p className="text-sm text-destructive mt-1">{errors.dob[0]}</p>}
        </div>
        
        <div>
          <Label htmlFor="bloodGroup">Blood Group | ब्लड ग्रुप</Label>
           <Select name="bloodGroup" required onValueChange={setBloodGroup} value={bloodGroup}>
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
          {errors?.bloodGroup && <p className="text-sm text-destructive mt-1">{errors.bloodGroup[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="whatsapp">WhatsApp No. | वाट्सएप नंबर</Label>
          <Input id="whatsapp" name="whatsapp" type="tel" placeholder="अपना वाट्सएप मोबाइल नंबर यहाँ लिखें" />
           {errors?.whatsapp && <p className="text-sm text-destructive mt-1">{errors.whatsapp[0]}</p>}
        </div>
        <div>
          <Label htmlFor="mobile">Mobile No. | मोबाइल नंबर</Label>
          <Input id="mobile" name="mobile" type="tel" placeholder="अपना मोबाइल नंबर यहाँ लिखें" required />
          {errors?.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile[0]}</p>}
        </div>
      </div>
      
      <div>
        <Label htmlFor="address">Full Address | पूरा पता</Label>
        <Textarea id="address" name="address" placeholder="अपना पूरा पता यहाँ लिखें" rows={4} required />
        {errors?.address && <p className="text-sm text-destructive mt-1">{errors.address[0]}</p>}
      </div>
      
      {success && (
        <Alert variant="default" className='bg-green-100 border-green-400 text-green-700'>
          <Terminal className="h-4 w-4 !text-green-700" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your registration has been saved.</AlertDescription>
        </Alert>
      )}
      
      <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
        {isSubmitting ? 'Registering...' : 'Register Now'}
      </Button>
    </form>
  );
}
