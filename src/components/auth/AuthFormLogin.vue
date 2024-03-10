<script>
import { axiosInstance } from '../../http'

export default {
  name: 'AuthFormLogin',
  data() {
    return {
      error: '',
      userEmail: '',
      userPassword: ''
    }
  },
  methods: {
    toRegistrationForm(page) {
      this.selectedPage = page
      this.$emit('update-current-page', page)
    },
    loginAuth(email, password) {
      if (this.email == '' || this.password == '') {
        this.error = 'Fill in all fields!'
      } else {
        this.error = ''
        console.log('Attempting login with email:', email)
        axiosInstance
          .post(
            'user/login',
            {
              email,
              password
            }
            // ,{ headers: {'Authorization': store.token}}
          )
          .then((response) => {
            console.log('Response status:', response.status)
            if (response.status === 200) {
              console.log('Login successful!')

              this.$emit('update-login-form', true)
            }
          })
          .catch((error) => {
            console.error('Error during login:', error)
            this.$emit('update-login-form', false)
          })
      }
    }
  }
}
</script>

<template>
  <form
    class="flex-col flex gap-2 border border-slate-500 rounded-xl shadow px-2 py-1 bg-gray-400 h-40 w-56"
  >
    <div class="flex items-center gap-2">
      <img src="/icon/user_icon.png" alt="User" class="w-7" />
      <h3>Login</h3>
    </div>
    <div class="flex-col flex gap-2">
      <input
        type="email"
        v-model="userEmail"
        class="border border-slate-500 rounded-md form-control pl-2"
        placeholder="Email"
      />
      <input
        type="password"
        v-model="userPassword"
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
          @click="loginAuth(userEmail, userPassword)"
        >
          Login
        </button>
      </div>
    </div>
  </form>
</template>
