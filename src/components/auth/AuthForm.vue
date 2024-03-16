<template>
  <div v-if="store.currentUser.isLoggedIn === false">
    <form id="LoginForm" class="w-flex">
      <div class="xs8">
        <div
          class="xs8"
          @keyup.enter="
            logIn(
              store.currentUser.authentication.username,
              store.currentUser.authentication.password,
              this.$router
            )
          "
        >
          <w-input
            class="mb2"
            label="Username"
            type="text"
            inner-icon-left="mdi mdi-account"
            v-model="store.currentUser.authentication.username"
          ></w-input>
          <!-- @keyup.enter="logIn(store.currentUser.authentication.username, store.currentUser.authentication.password, this.$router)" -->
          <w-input
            class="mb2"
            label="Password"
            :type="isPassword ? 'password' : 'text'"
            :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
            @click:inner-icon-left="isPassword = !isPassword"
            v-model="store.currentUser.authentication.password"
          ></w-input>
          <!-- @keyup.enter="logIn(store.currentUser.authentication.username, store.currentUser.authentication.password, this.$router)" -->
        </div>
        <div class="xs4">
          <w-button
            @click="
              logIn(
                store.currentUser.authentication.username,
                store.currentUser.authentication.password,
                this.$router
              )
            "
            :disabled="!store.isLoginEnabled()"
          >
            LogIn
          </w-button>
        </div>
        <input
          label="Email"
          type="email"
          v-model="store.currentUser.authentication.useremail"
          class="border border-slate-500 rounded-md form-control pl-2"
          placeholder="Email"
        />
        <input
          label="Password"
          type="password"
          v-model="store.currentUser.authentication.password"
          class="border border-slate-500 rounded-md form-control pl-2"
          placeholder="Password"
        />
        <p className="error">{{ error }}</p>
      </div>

      <div class="flex justify-between">
        <div class="flex flex-col">
          <a
            class="text-sm text-gray-500 hover:text-black cursor-pointer"
            @click="toRegistrationForm('RegistrationForm')"
            href="#RegistrationForm"
            >Registration</a
          >
          <a class="text-sm text-gray-500 hover:text-black cursor-pointer" href="#"
            >Forgot password?</a
          >
        </div>
        <div>
          <button
            class="bg-blue-400 text-white rounded-md px-2 py-1 hover:bg-blue-500 btn btn-primary btn-block"
            @click="
              logIn(
                store.currentUser.authentication.useremail,
                store.currentUser.authentication.password,
                this.$router
              )
            "
            :disabled="!store.isLoginEnabled()"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
  <div v-else>
    <form
      id="ProfileForm"
      class="flex-col flex gap-2 border border-slate-500 rounded-xl shadow px-2 py-1 bg-gray-400 h-40 w-56"
    >
      <div class="flex items-center gap-2"></div>
      <div>
        <h1>{{ store.currentUser.user.userid }}</h1>
        <h1>{{ store.currentUser.user.username }}</h1>
        <h1>{{ store.currentUser.authentication.useremail }}</h1>
        <h1>{{ store.currentUser.user.role }}</h1>
        <h1>{{ store.currentUser.user.balance }}</h1>
        <h1>{{ store.currentUser.user.price }}</h1>
      </div>
    </form>
  </div>
</template>
<script>
import { store } from '@/utils/store'

async function logIn(useremail, password, router) {
  await store.logIn(useremail, password)
  console.log(router)
  // if (store.destination != null) {
  //   await router.push(store.destination)
  // } else {
  //   await router.push('/main')
  // }
}

export default {
  name: 'AuthFormLogin',
  data() {
    return {
      store,
      logIn,
      error: ''
    }
  },
  methods: {
    toRegistrationForm(page) {
      this.selectedPage = page
      this.$emit('update-current-page', page)
    },
    checkFields(useremail, password) {
      if (this.useremail == '' || this.password == '') {
        this.error = 'Fill in all fields!'
      } else {
        this.error = ''
        console.log('Attempting login with email:', useremail)
        console.log('Attempting login with pass:', password)
      }
    }
  }
}
</script>
