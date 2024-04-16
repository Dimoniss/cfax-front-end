import { reactive } from 'vue'
// import { Buffer } from 'buffer'
import { axiosInstance } from '@/http'

export const vin = reactive({
  vin: null,
  checked: null,
  payedVin: null,
  report: null,
  sendedToEmail: null,

  async checkVin(vin) {
    await axiosInstance.get('/report/check-by-vin/' + vin).then(
      ({ data }) => {
        this.checked = data
        this.vin = vin
        console.log(data)
      },
      (error) => {
        console.log(error)
        window.alert('Check VIN failed.')
      }
    )
  },
  async getReport(vin, userId) {
    await axiosInstance.get('/report/get-report/' + vin + '/' + userId).then(({ data }) => {
      this.report = data
    }),
      (error) => {
        console.log(error)
        window.alert('Get report failed.')
      }
  }
})
