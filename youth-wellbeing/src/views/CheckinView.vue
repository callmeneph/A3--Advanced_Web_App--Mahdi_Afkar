<template>
  <h2 class="mb-3">Daily Check-in</h2>

  <div v-if="!user" class="alert alert-warning">
    Please <RouterLink to="/signin">sign in</RouterLink> to record a check-in.
  </div>

  <form v-else class="card p-3" @submit.prevent="save">
    <label class="form-label fw-semibold">Mood (1–10)</label>
    <input type="range" min="1" max="10" v-model="mood" class="form-range" />
    <div class="mb-3 small text-muted">Current: {{ mood }}</div>

    <label class="form-label fw-semibold">Note (optional)</label>
    <textarea v-model="note" class="form-control" rows="3" placeholder="How are you feeling today?"></textarea>

    <button class="btn btn-primary mt-3" :disabled="saving">
      {{ saving ? 'Saving...' : 'Save check-in' }}
    </button>

    <p v-if="saved" class="text-success mt-3 mb-0">Saved. Nice work taking care of yourself 💚</p>
  </form>
</template>

<script setup>
import { ref as vueRef, onMounted } from 'vue'
import { auth, db } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const mood = vueRef(5)
const note = vueRef('')
const saving = vueRef(false)
const saved = vueRef(false)
const user = vueRef(null)

onMounted(() => onAuthStateChanged(auth, u => user.value = u))

async function save() {
  if (!user.value) return
  saving.value = true
  saved.value = false
  await addDoc(collection(db, 'checkins'), {
    uid: user.value.uid,
    mood: Number(mood.value),
    note: note.value.trim(),
    createdAt: serverTimestamp(),
  })
  saving.value = false
  saved.value = true
  note.value = ''
}
</script>
