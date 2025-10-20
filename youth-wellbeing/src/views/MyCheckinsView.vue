<script setup>
import { db, auth } from '@/lib/firebase'
import { collection, query, where, orderBy } from 'firebase/firestore'
import { useCurrentUser, useCollection } from 'vuefire'

const user = useCurrentUser()
const q = computed(()=> user.value
  ? query(collection(db,'checkins'), where('uid','==',user.value.uid), orderBy('createdAt','desc'))
  : null
)
const myCheckins = useCollection(q)
</script>

<template>
  <div class="container py-4">
    <h2>My Check-ins</h2>
    <p v-if="!myCheckins">Sign in to see your history.</p>
    <ul v-else class="list-group">
      <li v-for="c in myCheckins" :key="c.id" class="list-group-item">
        <strong>Mood:</strong> {{ c.mood }} — <em>{{ c.note }}</em>
        <span class="text-muted float-end">{{ c.createdAt?.toDate?.().toLocaleString?.() }}</span>
      </li>
    </ul>
  </div>
</template>
