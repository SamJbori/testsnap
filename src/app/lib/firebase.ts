import { getApps, initializeApp, FirebaseOptions } from "firebase/app";
import { collection, getFirestore, query, where } from "firebase/firestore";

export const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSIGING_SENSOR_ID,
  appId: process.env.APP_ID,
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default app;
export const db = getFirestore(app);

export const q = query(
  collection(db, "Stores"),
  where("users", "array-contains", "3fd79391d285277fe615b2b145637a71")
);
