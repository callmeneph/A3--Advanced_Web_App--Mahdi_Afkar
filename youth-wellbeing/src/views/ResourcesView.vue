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
