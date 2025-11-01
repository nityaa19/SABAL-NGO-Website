'use server';

import { z } from 'zod';
import { differenceInYears } from 'date-fns';
import { initializeFirebase } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';

export type BloodDonationFormState = {
  message: string;
  errors?: {
    fullName?: string[];
    email?: string[];
    dob?: string[];
    bloodGroup?: string[];
    whatsapp?: string[];
    mobile?: string[];
    address?: string[];
  };
  success: boolean;
};

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const bloodDonationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  dob: z.string().refine((dob) => new Date(dob) < new Date(), {
      message: "Date of birth must be a past date.",
    }).refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: "You must be at least 18 years old to donate blood.",
    }),
  bloodGroup: z.string().min(1, 'Please select your blood group.'),
  whatsapp: z.string().regex(phoneRegex, 'Invalid WhatsApp number').optional().or(z.literal('')),
  mobile: z.string().regex(phoneRegex, 'Invalid mobile number').min(10, 'Mobile number must be at least 10 digits.'),
  address: z.string().min(10, 'Please enter your full address.'),
});

export async function submitBloodDonationForm(
  prevState: BloodDonationFormState,
  formData: FormData
): Promise<BloodDonationFormState> {

  const validatedFields = bloodDonationSchema.safeParse({
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    dob: formData.get('dob'),
    bloodGroup: formData.get('bloodGroup'),
    whatsapp: formData.get('whatsapp'),
    mobile: formData.get('mobile'),
    address: formData.get('address'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check the form fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const { firestore } = initializeFirebase();
    const donationsCollection = collection(firestore, 'bloodDonations');
    
    // Ensure we wait for the operation to complete
    await addDoc(donationsCollection, {
      ...validatedFields.data,
      submittedAt: new Date(),
    });
    
    return {
      message: 'Thank you for registering to donate blood! Your registration has been saved.',
      success: true,
    };

  } catch (error) {
    console.error('Error saving to Firestore:', error);
    // Provide a more specific error message if possible
    let errorMessage = 'An unexpected error occurred. Please try again later.';
    if (error instanceof Error && 'code' in error) {
      if ((error as {code: string}).code === 'permission-denied') {
        errorMessage = 'There was a problem with saving your data due to security rules. Please contact support.';
      }
    }
    return {
      message: errorMessage,
      success: false,
    }
  }
}
