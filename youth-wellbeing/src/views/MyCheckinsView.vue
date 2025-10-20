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

