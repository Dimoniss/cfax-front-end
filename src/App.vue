<script setup>
import TheHeader from './components/HeaderView.vue'
import CheckVIN from './components/view/CheckVINView.vue'
import TheNav from './components/NavView.vue'
import Information from './components/view/InformationView.vue'
import Support from './components/view/SupportView.vue'
import MainFooter from './components/FooterView.vue'
import RegistrationForm from './components/auth/RegistrationForm.vue'

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
<template>
  <w-app class="flex flex-col min-h-screen w-4/5 m-auto h-screen rounded-xl shadow-xl">
    <header><TheHeader /></header>
    <w-button>My Button</w-button>
    <TheNav @update-current-page="currentPage = $event" />
    <main class="flex-1 m-auto p-12">
      <!-- <b>store: {{ store }}</b> -->

      <CheckVIN v-if="currentPage === 'Check VIN'" />
      <Information v-else-if="currentPage === 'information'" />
      <Support v-else-if="currentPage === 'support'" />
      <RegistrationForm v-else-if="currentPage === 'RegistrationForm'" />
    </main>
    <MainFooter />
  </w-app>
</template>

<style></style>
