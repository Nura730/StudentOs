/**
 * Cloud Firestore service.
 *
 * Exposes a configured `db` instance only. Deliberately does NOT include
 * any read/write/query helpers yet — CRUD is a separate task. Import `db`
 * from here wherever you need to build a `collection()`/`doc()` reference.
 *
 * Example (for later, not used in this file):
 *   import { collection } from "firebase/firestore";
 *   import { db } from "../services/firestore";
 *   const tasksRef = collection(db, "tasks");
 */
import { getFirestore, type Firestore } from "firebase/firestore";

import { app } from "./firebase";

export const db: Firestore = getFirestore(app);
