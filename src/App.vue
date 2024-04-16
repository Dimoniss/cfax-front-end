<template>
  <w-app height="100%" width="100%">
    <header><TheHeader /></header>
    <nav><NavView @update-current-page="currentPage = $event" /></nav>

    <main class="flex-1 m-auto p-12">
      <CheckVIN v-if="currentPage === 'Check VIN'" @update-current-page="currentPage = $event" />
      <Information v-else-if="currentPage === 'Information'" />
      <Support v-else-if="currentPage === 'Support'" />
      <Registration
        v-else-if="currentPage === 'Registration'"
        @update-current-page="currentPage = $event"
      />
      <Price v-else-if="currentPage === 'Price'" />
      <Profile v-else-if="currentPage === 'Profile'" />
      <ForgotPass v-else-if="currentPage === 'ForgotPass'" />
      <Purchasing v-else-if="currentPage === 'Purchasing'" />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </w-app>
</template>

<script setup>
import TheHeader from './components/HeaderView.vue'
import CheckVIN from './components/view/CheckVINView.vue'
import NavView from './components/NavView.vue'
import Information from './components/view/InformationView.vue'
import Support from './components/view/SupportView.vue'
import MainFooter from './components/FooterView.vue'
import Registration from './components/view/RegistrationView.vue'
import Price from './components/view/PriceView.vue'
import Profile from './components/view/ProfileView.vue'
import ForgotPass from './components/view/ForgotPassForm.vue'
import Purchasing from './components/view/PurchasingView.vue'

import { currentPage } from './utils/state'
import { store } from '@/utils/store'
</script>
<script>
export default {
  name: 'App',

  data() {
    return {
      store
    }
  }
}
</script>

<style scoped>
/* Style for the horizontal menu */
nav {
  padding: 12px;
  background-color: #ffffff;
  min-height: 60px;
}

.w-app {
  background-color: #ffffff;
  font-family: Graphik-Regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  color: #161616;
  padding: 12px;
  background-color: #c4c4c4;
  min-height: 60px;
}

footer {
  margin-top: auto;
  padding: 12px;
  background-color: #c4c4c4;
  color: #ffffff;
  /* max-height: 60px; */
}

main {
  color: #666;
  background-color: #ffffff;
}

@font-face {
  font-family: 'Graphik-Light';
  src: url('./assets/fonts/Graphik-Light.woff2') format('woff2');
}

@font-face {
  font-family: 'Graphik-Regular';
  src: url('./assets/fonts/Graphik-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Graphik-Semibold';
  src: url('./assets/fonts/Graphik-Semibold.woff2') format('woff2');
}
</style>
