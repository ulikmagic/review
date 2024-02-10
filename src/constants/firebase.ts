import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAeMmt9SB6Abh_fReyCEUZl8ogVjOMWn84",
  authDomain: "review-mary.firebaseapp.com",
  projectId: "review-mary",
  storageBucket: "review-mary.appspot.com",
  messagingSenderId: "504574313800",
  appId: "1:504574313800:web:24ba4cafb314409ab8df7d"
};

export const APP = initializeApp(firebaseConfig);
export const DB = getDatabase();
export const auth = getAuth();