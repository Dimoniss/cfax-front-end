<template>
  <div class="RegistrationView">
    <h1>Registration</h1>
    <div class="input-column">
      <w-input
        class="mb1"
        label="Name"
        type="text"
        inner-icon-left="mdi mdi-account"
        v-model="userName"
      ></w-input>
      <w-input
        class="mb1"
        label="Lastname"
        type="text"
        inner-icon-left="mdi mdi-account"
        v-model="userLastname"
      ></w-input>
      <w-input
        class="mb1"
        label="Email"
        type="email"
        inner-icon-left="mdi mdi-email"
        v-model="userEmail"
      ></w-input>
      <w-input
        class="mb1"
        label="Password"
        :type="isPassword ? 'password' : 'text'"
        :inner-icon-left="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
        @click:inner-icon-left="isPassword = !isPassword"
        v-model="userPassword"
      ></w-input>
    </div>
    <button class="w-button" @click="sendData">Registration</button>
    <p className="error">{{ error }}</p>
  </div>
</template>

<script>
import { store } from '@/utils/store'
import { axiosInstance } from '@/http'
export default {
  name: 'RegistrationView',
  data() {
    return {
      error: '',
      store,
      userName: '',
      userLastname: '',
      userEmail: '',
      userPassword: '',
      isPassword: true
    }
  },
  methods: {
    toProfile() {
      this.selectedPage = 'Profile'
      this.$emit('update-current-page', 'Profile')
    },
    sendData() {
      if (
        this.userName == '' ||
        this.userLastname == '' ||
        this.userEmail == '' ||
        this.userPassword == ''
      ) {
        this.error = 'Fill in all fields!'
      } else {
        this.error = ''
        axiosInstance
          .post('user/create/', {
            username: this.userName + ' ' + this.userLastname,
            password: this.userPassword,
            email: this.userEmail
          })
          .then(({ data }) => {
            console.log(data)
            if (data === true) {
              logIn(this.userEmail, this.userPassword, this.$router)
              this.toProfile()
            } else {
              this.error = 'Failed to create new user!'
            }
          })
      }
    }
  }
}

async function logIn(useremail, password, router) {
  await store.logIn(useremail, password)
  console.log(router)
  // if (store.destination != null) {
  //   await router.push(store.destination)
  // } else {
  //   await router.push('/main')
  // }
}
</script>

<style scoped>
.w-button {
  height: 36px;
  margin-top: 15px;
  margin-bottom: 100px;
}
/* Style for input column */
.input-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Style for error message */
.error {
  color: red;
}
</style>
