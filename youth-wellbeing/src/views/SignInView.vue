<template>
  <h2 class="mb-3">Sign in</h2>

  <div v-if="user" class="alert alert-success d-flex justify-content-between align-items-center">
    <div>Signed in as <strong>{{ user.email }}</strong></div>
    <button class="btn btn-outline-danger btn-sm" @click="logout">Sign out</button>
  </div>

  <button v-else class="btn btn-primary" @click="login">Continue with Google</button>
</template>

<script setup>
import { ref as vueRef, onMounted } from 'vue'
import { auth } from '@/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

const user = vueRef(null)

onMounted(() => onAuthStateChanged(auth, u => user.value = u))

async function login() {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}
async function logout() {
  await signOut(auth)
}
</script>
