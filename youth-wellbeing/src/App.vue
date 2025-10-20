<script setup>
import { useAuth } from '@/composables/useAuth'
const { user, signOut } = useAuth()
</script>

<template>
  <header class="topnav">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/resources">Resources</router-link>
      <router-link v-if="user" to="/check-in">Check-in</router-link>
      <router-link v-if="user" to="/my">My History</router-link>

      <span class="spacer" />

      <router-link v-if="!user" to="/sign-in">Sign in</router-link>
      <button v-else @click="signOut">Sign out</button>
    </nav>
  </header>

  <router-view />
</template>

<style scoped>
.topnav { padding: .75rem 1rem; border-bottom: 1px solid #ddd; }
nav { display: flex; gap: 1rem; align-items: center; }
.spacer { flex: 1; }
button { padding: .4rem .8rem; cursor: pointer; }
</style>
