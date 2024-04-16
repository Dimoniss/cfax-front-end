<template>
  <div grow>
    <w-flex class="justify-center">
      <div class="check-column">
        <h1>Check VIN</h1>
        <div class="w-flex">
          <w-input class="mb1" label="Insert VIN" type="text" v-model="inputVin"></w-input>
          <w-button @click="vin.checkVin(inputVin)"> Search </w-button>
        </div>
        <div v-if="vin.checked !== null" class="record-section">
          <h2>Searching results:</h2>
          <div v-if="vin.checked.autocheck.vin == vin.checked.carfax.vin">
            <p>Vehicle: {{ vin.checked.autocheck.vehicle }}</p>
            <p>Year: {{ vin.checked.autocheck.year }}</p>
            <p>VIN: {{ vin.checked.autocheck.vin }}</p>
            <p>Autocheck records: {{ vin.checked.autocheck.records }}</p>
            <p>Carfax records: {{ vin.checked.carfax.records }}</p>
          </div>
        </div>
        <div v-if="store.currentUser.isLoggedIn && vin.report === null">
          <w-button @click="processPayment()" :disabled="vin.checked === null">Buy Report</w-button>
          <w-button
            @click="useBalance()"
            :disabled="
              (store.currentUser.user.balance === 0 && store.currentUser.user.balance !== null) ||
              vin.checked === null
            "
          >
            Use balance</w-button
          >
        </div>
        <w-button v-if="vin.report !== null" @click="openReport()">Open report</w-button>
        <p v-if="vin.report !== null">Report has been sent to your email.</p>
        <div v-if="store.currentUser.isLoggedIn === false">
          <p>Please login or registered.</p>
          <w-button @click="toRegistration('Registration')">Registration</w-button>
        </div>
      </div>
    </w-flex>
  </div>
</template>

<script>
import { store } from '@/utils/store'
import { vin } from '@/utils/vin'

export default {
  name: 'CheckVINView',
  data() {
    return {
      store,
      vin,
      inputVin: '',
      htmlContent: '',
      isHTMLVisible: false
    }
  },
  created() {
    // Set the initial value of inputVin when the component is created
    this.inputVin = vin.vin // Replace 'YourInitialValueHere' with the desired initial value
  },
  methods: {
    processPayment() {
      // add 2 to balance
      // confirm;number;price;userId

      store.payment('OK;2;1.23;1')

      vin.payedVin = true
    },
    useBalance() {
      vin.getReport(vin.vin, store.currentUser.user.userid)
    },
    openReport() {
      // Open a new window with the HTML content
      const newWindow = window.open('', '_blank')
      newWindow.document.write(vin.report)
    }
  },
  toPurchasing(page) {
    this.selectedPage = page
    this.$emit('update-current-page', page)
  },
  toRegistration(page) {
    this.selectedPage = page
    this.$emit('update-current-page', page)
  }
}
</script>
<style scoped>
.htmView {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.check-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px;
}
/* Style for the horizontal menu */
nav {
  padding: 12px;
  background-color: #ffffff;
  min-height: 60px;
}

.record-section {
  border: 1px solid #ccc; /* Border for each record section */
  padding: 10px; /* Padding around each record section */
  gap: 20px; /* Gap between grid items */
  text-align: left;
}

.record-section h2 {
  margin-top: 0; /* Remove margin from h2 */
}
.record-section p {
  font-weight: bold; /* Make values inside <p> tags bold */
}
</style>
