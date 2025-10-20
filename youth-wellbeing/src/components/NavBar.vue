<!-- src/components/NavBar.vue -->
<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Wellbeing</router-link>

      <div>
        <router-link class="me-3" to="/resources">Resources</router-link>
        <router-link class="me-3" to="/checkin">Check-in</router-link>
        <router-link class="me-3" to="/mycheckins">My History</router-link>
        <router-link class="me-3" to="/signin">Sign in</router-link>

        <span v-if="user">{{ user.email }}</span>
        <button v-if="user" class="btn btn-sm btn-outline-secondary ms-2" @click="signOutUser">Sign out</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { onUnmounted, ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default {
  setup() {
    const user = ref(null);
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      user.value = u;
    });

    onUnmounted(() => unsubscribe());

    async function signOutUser() {
      await signOut(auth);
    }

    return { user, signOutUser };
  }
};
</script>
