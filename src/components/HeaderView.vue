<template>
  <header>
    <w-flex grow>
      <div class="md4">
        <img class="xs6" src="/logo/logo-no-background.png" alt="logo" />
      </div>
      <div class="md4">
        <h1>CARFAX Reports</h1>
        <p>Check your car with CFax</p>
      </div>
      <div class="md4">
        <AuthForm @update-current-page="currentPage = $event" />
      </div>
    </w-flex>
  </header>
</template>

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

<style></style>
