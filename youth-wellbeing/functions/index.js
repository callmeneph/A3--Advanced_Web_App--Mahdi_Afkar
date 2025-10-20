import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { setGlobalOptions } from 'firebase-functions/v2';
import logger from 'firebase-functions/logger';
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

// optional: set region, concurrency etc.
setGlobalOptions({ region: 'australia-southeast1', maxInstances: 10 });

/**
 * Callable: returns current user's check-in count.
 * Request.auth is set by Firebase Auth when called from the client SDK.
 */
export const getCheckinCount = onCall(async (request) => {
  const uid = request.auth?.uid;
  if (!uid) {
    throw new HttpsError('unauthenticated', 'Sign in required.');
  }

  logger.info('Counting checkins for', uid);
  const snap = await db.collection('checkins').where('uid', '==', uid).get();
  return { count: snap.size };
});
