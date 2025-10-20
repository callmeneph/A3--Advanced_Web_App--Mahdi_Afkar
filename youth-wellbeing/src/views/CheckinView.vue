<script setup>
import { ref as vref } from 'vue'
import { db, auth } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'

const mood = vref(3); const note = vref(''); const uid = vref<string|null>(null)
const router = useRouter()
onAuthStateChanged(auth, (u)=> uid.value = u?.uid ?? null)

const submit = async () => {
  if (!uid.value) return router.push('/signin')
  await addDoc(collection(db,'checkins'), {
    uid: uid.value, mood: Number(mood.value), note: note.value, createdAt: serverTimestamp()
  })
  note.value = ''; mood.value = 3; alert('Saved!')
}
