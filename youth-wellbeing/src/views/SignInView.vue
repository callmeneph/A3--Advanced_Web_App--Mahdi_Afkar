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


