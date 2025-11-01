'use client';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function submitContactForm(formData: ContactFormData) {
  const { firestore } = initializeFirebase();
  const submissionsCollection = collection(firestore, 'contactFormSubmissions');

  const dataToSave = {
    ...formData,
    submissionDate: serverTimestamp(),
  };

  addDoc(submissionsCollection, dataToSave)
    .catch((serverError) => {
      console.error("Firestore write error:", serverError);
      const permissionError = new FirestorePermissionError({
        path: submissionsCollection.path,
        operation: 'create',
        requestResourceData: dataToSave,
      });
      errorEmitter.emit('permission-error', permissionError);
      // This will be caught by the calling component's try/catch
      throw new Error('Failed to save contact form submission due to a server error.');
    });
}
