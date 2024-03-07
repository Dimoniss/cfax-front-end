import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: window.__env.back_end.base_url
})
