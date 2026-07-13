/**
 * Firebase Authentication service.
 *
 * Exposes a ready-to-use `auth` instance plus thin wrapper functions.
 * No UI is included here — screens call these functions later.
 *
 * Supported now:
 *  - Anonymous ("Guest Mode") sign-in — fully functional, call `signInAsGuest()`.
 *  - Google sign-in — the Firebase side (`signInWithGoogleIdToken`) is ready,
 *    but it needs an OAuth ID token to call it with. Getting that token requires
 *    a UI-driven flow (e.g. expo-auth-session's Google provider, or
 *    @react-native-google-signin/google-signin for a native button), which
 *    wasn't installed as part of this task. When the login UI is built, install
 *    one of those, obtain an `idToken`, and pass it to `signInWithGoogleIdToken`.
 */
import {
  initializeAuth,
  onAuthStateChanged as firebaseOnAuthStateChanged,
  signInAnonymously as firebaseSignInAnonymously,
  signInWithCredential,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  browserLocalPersistence,
  type Auth,
  type User,
  // @ts-expect-error — getReactNativePersistence ships in the RN bundle at
  // runtime but isn't in the public web type definitions. Safe to ignore;
  // see https://github.com/firebase/firebase-js-sdk/issues/9316
  getReactNativePersistence,
} from "firebase/auth";
import { Platform } from "react-native";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { app } from "./firebase";

export const auth: Auth = initializeAuth(app, {
  persistence:
    Platform.OS === "web"
      ? browserLocalPersistence
      : getReactNativePersistence(ReactNativeAsyncStorage),
});

/**
 * Signs the user in anonymously ("Guest Mode"). Safe to call on app launch
 * if no user is currently signed in — anonymous accounts can later be
 * upgraded to a permanent account (e.g. linked with Google) without losing
 * their uid, via `linkWithCredential`.
 */
export function signInAsGuest(): Promise<User> {
  return firebaseSignInAnonymously(auth).then((result) => result.user);
}

/**
 * Completes Google sign-in given an ID token obtained from an OAuth flow.
 * This function is ready to use as-is; it's the token-acquisition UI that's
 * still missing (see file header).
 */
export function signInWithGoogleIdToken(idToken: string): Promise<User> {
  const credential = GoogleAuthProvider.credential(idToken);
  return signInWithCredential(auth, credential).then((result) => result.user);
}

/** Signs the current user out. */
export function signOutUser(): Promise<void> {
  return firebaseSignOut(auth);
}

/** Returns the currently signed-in user, or null if signed out. */
export function getCurrentUser(): User | null {
  return auth.currentUser;
}

/**
 * Subscribes to auth state changes. Returns an unsubscribe function —
 * call it in a useEffect cleanup to avoid leaking the listener.
 */
export function onAuthStateChanged(
  callback: (user: User | null) => void
): () => void {
  return firebaseOnAuthStateChanged(auth, callback);
}
