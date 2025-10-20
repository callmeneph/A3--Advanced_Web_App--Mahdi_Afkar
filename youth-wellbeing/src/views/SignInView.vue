<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const route = useRoute()
const { user, signIn, signOut } = useAuth()

const doSignIn = async () => {
  await signIn()
  const back = route.query.redirect || '/'
  router.replace(back)
}

const doSignOut = async () => {
  await signOut()
}
</script>

<template>
  <section class="container">
    <h1>Sign In</h1>

    <div v-if="!user">
      <p>Use your Google account to continue.</p>
      <button @click="doSignIn">Sign in with Google</button>
    </div>

    <div v-else>
      <p>Signed in as <strong>{{ user.displayName || user.email }}</strong></p>
      <button @click="doSignOut">Sign out</button>
    </div>
  </section>
</template>

<style scoped>
.container { max-width: 720px; margin: 2rem auto; }
button { padding: .6rem 1rem; cursor: pointer; }
</style>
