<script setup>
import AuthForm from './auth/AuthForm.vue'
import { currentPage } from '../utils/state'
import { store } from '@/utils/store'
</script>

<script>
export default {
  name: 'MainHeader',
  components: {
    AuthForm
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <header class="bg-gray-300 h-48">
    <w-flex justify-space-between>
      <div class="md4 p-4">
        <img class="xs6 aligh-left rounded-lg" src="/logo/logo-no-background.png" alt="logo" />
      </div>
      <div class="xs6 md4 p-4">
        <h1 class="text-xl font-semibold text-gray-800">CARFAX Reports</h1>
        <p class="text-slate-500">Check your car with CFax</p>
      </div>
      <div class="xs6 md4">
        <AuthForm @update-current-page="currentPage = $event" />
      </div>
    </w-flex>
  </header>
</template>
<style>
#authForm {
  font-size: smaller;
}

.grid-container {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'logo login';
}

.logo {
  grid-area: logo;
}

.login {
  grid-area: login;
}
</style>
