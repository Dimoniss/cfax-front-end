import { reactive } from 'vue'
// import { Buffer } from 'buffer'
// import { axiosInstance } from '@/http'

export const store = reactive({
  currentUser: {
    isLoggedIn: false,
    expiry: null,
    user: {
      username: null
    },
    authentication: {
      username: null,
      password: null
    },
    provider: ''
  },

  token: null,

  destination: null,

  loading: false
})
