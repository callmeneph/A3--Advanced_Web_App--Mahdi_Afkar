const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })
admin.initializeApp()
const db = admin.firestore()

// HTTPS function: returns count of checkins for the authed user (by Authorization: Bearer ID_TOKEN)
exports.getCheckinCount = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'GET') return res.status(405).send('Method Not Allowed')
    try {
      const idToken = (req.headers.authorization || '').replace('Bearer ', '')
      const decoded = await admin.auth().verifyIdToken(idToken)
      const snap = await db.collection('checkins').where('uid', '==', decoded.uid).get()
      res.json({ count: snap.size })
    } catch (e) {
      res.status(401).json({ error: 'Unauthorized' })
    }
  })
})
