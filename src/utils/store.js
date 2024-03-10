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

  // async logIn(username, password) {
  //   this.loading = true

  //   const now = new Date()

  //   this.token = 'Basic ' + Buffer.from(username + ':' + password, 'utf8').toString('base64')

  //   await axiosInstance
  //     .get(
  //       '/login/frontend/' + this.token
  //       // {
  //       //     headers: {
  //       //         'Authorization': this.token
  //       //     }
  //       // }
  //     )
  //     .then(
  //       ({ data }) => {
  //         if (data == null) this.token = null

  //         const { name, company, provider, roles } = data

  //         this.currentUser = {
  //           isLoggedIn: true,
  //           expiry: now.getTime() + 5000000,
  //           user: {
  //             username: name,
  //             company: company,
  //             roles: roles
  //           },
  //           authentication: {
  //             username: username,
  //             password: password
  //           },
  //           provider: provider
  //         }

  //         localStorage.setItem('user', JSON.stringify(this.currentUser))
  //       },
  //       (error) => {
  //         console.log(error)
  //         this.loading = false
  //         window.alert('Login failed.')
  //       }
  //     )
  // }
})
