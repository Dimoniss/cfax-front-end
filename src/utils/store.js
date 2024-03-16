import { reactive } from 'vue'
import { Buffer } from 'buffer'
import { axiosInstance } from '@/http'

export const store = reactive({
  currentUser: {
    isLoggedIn: false,
    expiry: null,
    user: {
      userid: null,
      username: null,
      role: null,
      balance: null,
      price: null
    },
    authentication: {
      useremail: null,
      password: null
    },
    provider: ''
  },

  token: null,

  destination: null,

  loading: false,

  isLoginEnabled() {
    let isEnabled =
      this.currentUser != null &&
      this.currentUser.authentication != null &&
      this.currentUser.authentication.useremail != null &&
      this.currentUser.authentication.password != null &&
      !(this.currentUser.authentication.password.trim().length === 0) &&
      !(this.currentUser.authentication.useremail.trim().length === 0)
    return isEnabled
  },

  async logIn(useremail, password) {
    this.loading = true

    const now = new Date()

    this.token = Buffer.from(useremail + ':' + password, 'utf8').toString('base64')

    await axiosInstance.get('/user/front/' + this.token).then(
      ({ data }) => {
        if (data == null) this.token = null

        this.currentUser = {
          isLoggedIn: true,
          expiry: now.getTime() + 5000000,
          user: {
            userid: data.userId,
            username: data.userName,
            role: data.role,
            balance: data.balance,
            price: data.price
          },
          authentication: {
            useremail: useremail,
            password: password
          }
        }

        localStorage.setItem('user', JSON.stringify(this.currentUser))
      },
      (error) => {
        console.log(error)
        this.loading = false
        window.alert('Login failed.')
      }
    )
  },

  logOut() {
    this.currentUser = {
      isLoggedIn: false,
      expiry: null,
      user: {
        userid: null,
        username: null,
        role: null,
        balance: null,
        price: null
      },
      authentication: {
        useremail: null,
        password: null
      },
      provider: ''
    }

    this.token = null

    this.destination = null

    localStorage.removeItem('user')
  }
})
