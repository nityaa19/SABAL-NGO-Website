'use server';

import { z } from 'zod';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase/admin'; // Use the admin SDK
import nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  // 1. Validate form data on the server
  const validatedFields = contactFormSchema.safeParse(formData);
  if (!validatedFields.success) {
    return { success: false, message: 'Invalid form data.' };
  }
  
  const {name, email, subject, message} = validatedFields.data;
  let firestoreError = false;

  // 2. Save to Firestore
  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, 'contactFormSubmissions');
  
    const dataToSave = {
      name,
      email,
      subject,
      message,
      submissionDate: serverTimestamp(),
    };
    
    await addDoc(submissionsCollection, dataToSave);
  } catch (serverError: any) {
    console.error("Firestore write error:", serverError);
    firestoreError = true;
    // We won't rethrow, but we'll let the email part fail and report based on that.
  }

  // If DB write failed, don't attempt to send email and return a DB error.
  if (firestoreError) {
      return { success: false, message: 'Your message could not be saved to the database. Please try again later.' };
  }

  // 3. Send email notification
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
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Message sent successfully!' };
  } catch (error: any) {
    console.error('Failed to send email:', error);
    // Even if email fails, the data is in Firestore.
    // We return a failure for email so the user can be notified if needed.
    return { success: false, message: 'Your message was saved, but the email notification could not be sent.' };
  }
}
