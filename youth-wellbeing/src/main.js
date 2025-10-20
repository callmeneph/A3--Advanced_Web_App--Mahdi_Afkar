// src/main.js
import { createApp, ref } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'

import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

// Your firebase init that should export `app` and `auth`
import { app as fbApp, auth } from '@/lib/firebase'   // <-- make sure `auth` is exported from this file

const app = createApp(App)

// a reactive ref that holds the current Firebase user (or null)
const currentUserRef = ref(null)

// start listening to auth state changes immediately
onAuthStateChanged(auth, (user) => {
  currentUserRef.value = user
})

// provide the ref so any component can `inject('currentUserRef')`
app.provide('currentUserRef', currentUserRef)

// install router and VueFire (auth module) then mount
app
  .use(router)
  .use(VueFire, { firebaseApp: fbApp, modules: [VueFireAuth()] })
  .mount('#app')
