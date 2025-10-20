// src/composables/useAuth.js
import { ref } from 'vue'
import { auth, googleProvider } from '@/firebase'
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as fbSignOut,
} from 'firebase/auth'

const user = ref(null)
let started = false

function startAuthListener() {
  if (started) return
  started = true
  onAuthStateChanged(auth, (u) => {
    user.value = u
  })
}

export function useAuth() {
  startAuthListener()

  const signIn = async () => {
    await signInWithPopup(auth, googleProvider)
  }

  const signOut = async () => {
    await fbSignOut(auth)
  }

  return { user, signIn, signOut }
}
