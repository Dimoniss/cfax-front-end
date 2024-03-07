<script setup>
import TheHeader from './components/TheHeader.vue'
import CheckVIN from './components/TheCheckVIN.vue'
import TheNav from './components/TheNav.vue'
import Information from './components/TheInformation.vue'
import Support from './components/TheSupport.vue'
import MainFooter from './components/TheFooter.vue'
import RegistrationForm from './components/RegistrationForm.vue'

import { currentPage } from './components/state'
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

    <TheNav @update-current-page="currentPage = $event" />
    <main class="flex-1">
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
