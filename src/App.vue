<script setup>
import TheHeader from './components/TheHeader.vue'
import CheckVIN from './components/TheCheckVIN.vue'
import TheNav from './components/TheNav.vue'
import Information from './components/TheInformation.vue'
import Support from './components/TheSupport.vue'

import { currentPage } from './components/state'
</script>

<template class="flex flex-col">
  <TheHeader />
  <TheNav @update-current-page="currentPage = $event" />
  <main>
    <CheckVIN v-if="currentPage === 'Check VIN'" />
    <Information v-else-if="currentPage === 'information'" />
    <Support v-else-if="currentPage === 'support'" />
  </main>
</template>
