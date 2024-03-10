<script setup>
import AuthFormLogin from './auth/AuthFormLogin.vue'
import AuthFormProfile from './auth/AuthFormProfile.vue'
import { auth, currentPage } from '../utils/state'
</script>

<template>
  <header class="flex items-center justify-between sticky top-0 px-6 py-2 bg-gray-300 h-44">
    <div class="flex items-center gap-4">
      <img src="/logo/logo-no-background.png" alt="Logo" class="w-40 rounded-md" />
      <div>
        <h1 class="text-xl font-semibold text-gray-800">CARFAX Reports</h1>
        <p class="text-slate-500">Check your car with CFax</p>
      </div>
    </div>

    <AuthFormLogin
      v-if="auth == false"
      @update-current-page="currentPage = $event"
      @update-login-form="auth = $event"
    />
    <AuthFormProfile v-if="auth == true" />
  </header>
</template>
