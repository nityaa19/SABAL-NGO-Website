import { getApps, initializeApp, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { credential } from 'firebase-admin';

// IMPORTANT: DO NOT MODIFY THIS FILE.
// This file is used to initialize the Firebase Admin SDK on the server.
// It is automatically configured by Firebase App Hosting.

export function initializeFirebase() {
  if (getApps().length > 0) {
    return {
      firestore: getFirestore(getApp()),
    };
  }

  // This will use the GOOGLE_APPLICATION_CREDENTIALS environment variable
  // automatically set by App Hosting.
  const app = initializeApp({
    credential: credential.applicationDefault(),
  });

  return {
    firestore: getFirestore(app),
  };
}
