'use client';

import { z } from 'zod';
import { differenceInYears } from 'date-fns';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';
import { initializeFirebase } from '@/firebase';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const bloodDonationSchema = z.object({
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

export type BloodDonationFormData = z.infer<typeof bloodDonationSchema>;

export async function saveBloodDonation(formData: BloodDonationFormData) {
  try {
    const { firestore } = initializeFirebase();
    const donationsCollection = collection(firestore, 'bloodDonations');
    
    const data = {
      ...formData,
      submittedAt: serverTimestamp(),
    };

    // Not awaiting this is intentional to allow for optimistic UI updates
    addDoc(donationsCollection, data)
      .catch((serverError) => {
        console.error("Firestore write error:", serverError);
        // Create and emit a more specific error for debugging
        const permissionError = new FirestorePermissionError({
          path: donationsCollection.path,
          operation: 'create',
          requestResourceData: data,
        });
        errorEmitter.emit('permission-error', permissionError);
        // Re-throw a generic error to be caught by the caller
        throw new Error('Failed to save donation due to a server error.');
      });

  } catch (error) {
    console.error('Error in saveBloodDonation:', error);
    // Re-throw the error to be handled by the calling component
    throw error;
  }
}
