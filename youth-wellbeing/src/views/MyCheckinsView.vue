<template>
  <div class="d-flex align-items-center justify-content-between mb-3">
    <h2 class="mb-0">My History</h2>
    <span class="badge bg-secondary" v-if="count !== null">Total: {{ count }}</span>
  </div>

  <div v-if="!user" class="alert alert-warning">
    Please <RouterLink to="/signin">sign in</RouterLink> to view your history.
  </div>

  <div v-else>
    <div v-if="loading" class="text-muted">Loading…</div>
    <div v-else-if="items.length === 0" class="alert alert-info">No check-ins yet.</div>

    <ul class="list-group">
      <li v-for="c in items" :key="c.id" class="list-group-item d-flex justify-content-between">
        <div>
          <div class="fw-semibold">Mood: {{ c.mood }}</div>
          <div class="small text-muted" v-if="c.note">{{ c.note }}</div>
        </div>
        <div class="small text-muted">{{ format(c.createdAt) }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref as vueRef, onMounted, watch } from 'vue'
import { auth, db } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'

const items = vueRef([])
const loading = vueRef(true)
const user = vueRef(null)
const count = vueRef(null)

const COUNT_URL = 'https://getcheckincount-wka7tvn5da-ts.a.run.app' 

onMounted(() => onAuthStateChanged(auth, u => user.value = u))

watch(user, async (u) => {
  if (!u) return
  loading.value = true
  const q = query(
    collection(db, 'checkins'),
    where('uid', '==', u.uid),
    orderBy('createdAt', 'desc')
  )
  const snap = await getDocs(q)
  items.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))

  // fetch count from Cloud Function
  try {
    const res = await fetch(`${COUNT_URL}?uid=${encodeURIComponent(u.uid)}`)
    const data = await res.json()
    count.value = data.count ?? null
  } catch { count.value = null }

  loading.value = false
})

function format(ts) {
  if (!ts) return ''
  const d = ts.toDate ? ts.toDate() : new Date(ts)
  return d.toLocaleString()
}
</script>
