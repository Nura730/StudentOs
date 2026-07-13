/**
 * Firebase app initialization.
 *
 * This is the single source of truth for the Firebase app instance.
 * `services/auth.ts` and `services/firestore.ts` both import `app` from here
 * instead of calling `initializeApp` themselves, so the SDK is only ever
 * initialized once no matter how many places import it.
 *
 * Config values come from environment variables (EXPO_PUBLIC_* so they're
 * inlined into the client bundle by Expo — see the .env.example file at the
 * project root for the variable names you need to set).
 *
 * Firebase web config values are not secret (they identify the project,
 * not authenticate it — access is controlled by Firebase Security Rules),
 * but they're still kept in env vars rather than hardcoded so different
 * environments (dev / staging / prod Firebase projects) can be swapped
 * without touching code.
 */
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

function assertConfigIsPresent(): void {
  const missing = Object.entries(firebaseConfig)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `Firebase config is missing values for: ${missing.join(", ")}. ` +
        "Set the corresponding EXPO_PUBLIC_FIREBASE_* variables in your .env file " +
        "(see .env.example) and restart the dev server."
    );
  }
}

assertConfigIsPresent();

// Reuse an existing app instance if one already exists (e.g. Fast Refresh)
// instead of calling initializeApp twice, which throws.
export const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
