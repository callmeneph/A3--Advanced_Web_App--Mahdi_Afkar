import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import router from './router'
import { app as fbApp } from '@/lib/firebase'

createApp(App)
  .use(router)
  .use(VueFire, { firebaseApp: fbApp, modules: [VueFireAuth()] })
  .mount('#app')
