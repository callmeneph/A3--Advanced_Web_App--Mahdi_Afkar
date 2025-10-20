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
</script>

<template>
  <div class="container py-4" style="max-width:520px">
    <h2>Daily Mood Check-in</h2>
    <label class="form-label mt-2">Mood (1–5)</label>
    <input type="range" min="1" max="5" class="form-range" v-model="mood">
    <div>Current: <strong>{{ mood }}</strong></div>

    <label class="form-label mt-3">Note (optional)</label>
    <textarea class="form-control" rows="3" v-model="note"/>

    <button class="btn btn-success mt-3" @click="submit">Submit</button>
  </div>
</template>
