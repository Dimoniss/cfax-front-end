<template>
  <div id="loginForm">
    <div v-if="store.currentUser.isLoggedIn === false">
      <div class="w-flex" justify-end>
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
            class="mb1"
            label="Email"
            type="text"
            inner-icon-left="mdi mdi-email"
            v-model="store.currentUser.authentication.useremail"
          ></w-input>
          <!-- @keyup.enter="logIn(store.currentUser.authentication.username, store.currentUser.authentication.password, this.$router)" -->
          <w-input
            class="mb1"
            label="Password"
            :type="isPassword ? 'password' : 'text'"
            :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
            @click:inner-icon-left="isPassword = !isPassword"
            v-model="store.currentUser.authentication.password"
          ></w-input>
          <div class="links-column">
            <a href="#" @click="toForgotPasswordForm('ForgotPass')" class="link"
              >Forgot Password?</a
            >
            <a href="#" @click="toRegistrationForm('Registration')" class="link">Registration</a>
          </div>
          <!-- @keyup.enter="logIn(store.currentUser.authentication.username, store.currentUser.authentication.password, this.$router)" -->
        </div>
        <div class="xs2 pa-2">
          <w-button
            @click="
              logIn(
                store.currentUser.authentication.useremail,
                store.currentUser.authentication.password,
                this.$router,
                toProfile
              )
            "
            :disabled="!store.isLoginEnabled()"
          >
            LogIn
          </w-button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="w-flex">
        <div class="xs8">
          <w-input
            class="mb1"
            label="User ID"
            type="text"
            inner-icon-left="mdi mdi-identifier"
            v-model="store.currentUser.user.userid"
            readonly
          >
          </w-input>
          <w-input
            class="mb1"
            label="User Name"
            type="text"
            inner-icon-left="mdi mdi-account"
            v-model="store.currentUser.user.username"
            readonly
          >
          </w-input>
          <w-input
            class="mb1"
            label="Email"
            type="text"
            inner-icon-left="mdi mdi-email"
            v-model="store.currentUser.authentication.useremail"
            readonly
          >
          </w-input>
          <w-input
            class="mb1"
            label="Balance"
            type="text"
            inner-icon-left="mdi mdi-currency-usd"
            v-model="store.currentUser.user.balance"
            readonly
          >
          </w-input>
        </div>
        <div class="xs2">
          <w-button @click="logOut()"> LogOut </w-button>
          <w-button @click="toProfile('Profile')"> Profile </w-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from '@/utils/store'
import '@mdi/font/css/materialdesignicons.min.css'

async function logIn(useremail, password, router, toProfile) {
  await store.logIn(useremail, password)
  console.log(router)
  toProfile('Profile')
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
      error: '',
      isPassword: true
    }
  },
  methods: {
    toForgotPasswordForm(page) {
      this.selectedPage = page
      this.$emit('update-current-page', page)
    },
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
    },
    toProfile(page) {
      this.selectedPage = 'Profile'
      this.$emit('update-current-page', page)
    },
    logOut() {
      store.logOut()
      this.$emit('update-current-page', 'Check VIN')
    }
  }
}
</script>

<style scoped>
.links-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link {
  margin: 2px 0; /* Adjust vertical spacing between links */
  text-decoration: none;
  color: #333; /* Link color */
}

.link:hover {
  color: #555; /* Hover color */
}
</style>
