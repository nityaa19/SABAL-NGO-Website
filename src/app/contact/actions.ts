'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';
import nodemailer from 'nodemailer';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  // 1. Save to Firestore
  const { firestore } = initializeFirebase();
  const submissionsCollection = collection(firestore, 'contactFormSubmissions');

  const dataToSave = {
    ...formData,
    submissionDate: serverTimestamp(),
  };

  try {
    await addDoc(submissionsCollection, dataToSave);
  } catch (serverError: any) {
    console.error("Firestore write error:", serverError);
    const permissionError = new FirestorePermissionError({
      path: submissionsCollection.path,
      operation: 'create',
      requestResourceData: dataToSave,
    });
    errorEmitter.emit('permission-error', permissionError);
    return { success: false, message: 'Failed to save submission to database.' };
  }

  // 2. Send email notification
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Message sent successfully!' };
  } catch (error: any) {
    console.error('Failed to send email:', error);
    // Even if email fails, the data is in Firestore.
    // We return a failure for email so the user can be notified if needed,
    // but we don't want to show a scary error if the main action (saving) succeeded.
    return { success: false, message: 'Your message was saved, but the email notification could not be sent.' };
  }
}
