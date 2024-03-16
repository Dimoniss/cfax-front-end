import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { store } from '@/utils/store'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

router.beforeEach(async (to, from, next) => {
  // start loading
  store.loading = true

  const userStr = localStorage.getItem('user')
  const now = new Date()
  let user = null

  if (!userStr) {
    // user non presente

    if (to.path !== '/') {
      // path richiesto diverso da quello di login, salva l'indirizzo desiderato e rimanda al login

      store.destination = to.fullPath
      next('/', (store.loading = false))
    } else {
      // path di login, prosegue

      store.loading = false
      next()
    }
  } else {
    // user presente

    user = JSON.parse(userStr)

    if (now.getTime() > user.expiry) {
      // sessione scaduta

      localStorage.removeItem('user')
      store.logOut()

      if (to.path !== '/') {
        // destinazione diversa da quella di login, salva l'indirizzo desiderato e rimanda al login

        store.destination = to.fullPath
        next('/', (store.loading = false))
      } else {
        // path di login, prosegue

        store.loading = false
        next()
      }
    } else {
      // sessione valida

      if (to.path === '/') {
        // path di login, esegue il logout
        await store.logOut()
      } else {
        // esegue il login per aggiornare la sessione

        store.destination = to.fullPath
        // await store.logIn(user.authentication.username, user.authentication.password)
        await store.updateSession(user)
      }

      store.loading = false
      next()
    }
  }
})

const app = createApp(App)

app.use(WaveUI, {
  /* Some Wave UI options */
})

app.use(router).mount('#app')
