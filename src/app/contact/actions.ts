'use server';

import { z } from 'zod';
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import { initializeFirebase } from '@/firebase/admin';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  // Validate the data on the server
  const validatedFields = contactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    throw new Error('Invalid form data provided.');
  }

  // Initialize Firebase Admin SDK
  const { firestore } = initializeFirebase();
  const submissionsCollection = collection(firestore, 'contactFormSubmissions');

  const dataToSave = {
    ...validatedFields.data,
    submissionDate: serverTimestamp(),
  };

  try {
    await addDoc(submissionsCollection, dataToSave);
  } catch (error) {
    console.error('Error writing contact form submission to Firestore:', error);
    throw new Error('Could not submit form. Please try again later.');
  }
}
