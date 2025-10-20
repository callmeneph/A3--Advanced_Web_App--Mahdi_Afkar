<script setup>
import { collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore'
import { useCollection } from 'vuefire'
import { db } from '@/lib/firebase'
import { ref } from 'vue'
const colRef = collection(db, 'resources')
const resources = useCollection(query(colRef, orderBy('createdAt','desc')))

const title = ref(''); const url = ref(''); const category = ref('General')
const addResource = async () => {
  if (!title.value || !url.value) return
  await addDoc(colRef, { title: title.value, url: url.value, category: category.value, createdAt: serverTimestamp() })
  title.value = url.value = ''
}
</script>

<template>
  <div class="container py-4">
    <h2>Resources</h2>
    <ul class="list-group my-3">
      <li v-for="r in resources" :key="r.id" class="list-group-item">
        <strong>{{ r.title }}</strong> — <a :href="r.url" target="_blank">{{ r.url }}</a>
        <span class="badge text-bg-info ms-2">{{ r.category }}</span>
      </li>
    </ul>

    <!-- add form (restrict to admin later) -->
    <div class="card p-3">
      <h5>Add resource</h5>
      <input class="form-control my-1" v-model="title" placeholder="Title">
      <input class="form-control my-1" v-model="url" placeholder="https://...">
      <select class="form-select my-1" v-model="category">
        <option>General</option><option>Emergency</option><option>Articles</option><option>Support</option>
      </select>
      <button class="btn btn-primary mt-2" @click="addResource">Add</button>
    </div>
  </div>
</template>
