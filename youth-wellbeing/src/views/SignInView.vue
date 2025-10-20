<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
const email = ref(''); const password = ref(''); const error = ref('')

const signIn = async () => {
  try { await signInWithEmailAndPassword(auth, email.value, password.value) }
  catch (e) { error.value = e.message }
}
const register = async () => {
  try { await createUserWithEmailAndPassword(auth, email.value, password.value) }
  catch (e) { error.value = e.message }
}
</script>


<template>
  <div class="container py-4" style="max-width:480px">
    <h2>Sign in / Register</h2>
    <input class="form-control my-2" v-model="email" placeholder="Email" />
    <input class="form-control my-2" v-model="password" type="password" placeholder="Password" />
    <div class="d-flex gap-2">
      <button class="btn btn-primary" @click="signIn">Sign in</button>
      <button class="btn btn-outline-secondary" @click="register">Register</button>
    </div>
    <p v-if="error" class="text-danger mt-2">{{ error }}</p>
  </div>
</template>
