<script>
export default {
  name: 'RegistrationView',
  data() {
    return {
      error: '',
      userName: '',
      userLastname: '',
      userEmail: '',
      userPassword: ''
    }
  },
  methods: {
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
      }
    }
  }
}
</script>

<template>
  <div
    class="flex-col flex gap-2 border border-slate-500 rounded-xl shadow px-2 py-1 bg-gray-300 h-120 w-80"
  >
    <h1>Registration</h1>
    <input
      type="Name"
      placeholder="Name"
      v-model="userName"
      class="border border-slate-500 rounded-md"
    />
    <input
      type="Lastname"
      placeholder="Lastname"
      v-model="userLastname"
      class="border border-slate-500 rounded-md"
    />
    <input
      type="Email"
      placeholder="Email"
      v-model="userEmail"
      class="border border-slate-500 rounded-md"
    />
    <input
      type="Password"
      placeholder="Password"
      v-model="userPassword"
      class="border border-slate-500 rounded-md"
    />
    <button class="bg-blue-400 text-white rounded-md px-2 py-1 hover:bg-blue-500" @click="sendData">
      Registration
    </button>
    <p className="error">{{ error }}</p>
  </div>
</template>
