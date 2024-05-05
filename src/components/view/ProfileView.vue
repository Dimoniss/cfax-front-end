<template>
  <h2>Profile</h2>
  <div class="profile-container">
    <div class="profile-buttons">
      <button
        @click="switchCategory('info')"
        :class="{ 'active-button': currentCategory === 'info' }"
      >
        Profile Info
      </button>
      <button
        @click="switchCategory('payments')"
        :class="{ 'active-button': currentCategory === 'payments' }"
      >
        Payments
      </button>
      <button
        @click="switchCategory('reports')"
        :class="{ 'active-button': currentCategory === 'reports' }"
      >
        Reports
      </button>
    </div>
    <div class="profile-content">
      <template v-if="currentCategory === 'info'"> </template>
      <template v-else-if="currentCategory === 'payments'">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Date</th>
              <th>Price</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="payment in store.currentUser.user.payments" :key="payment.id">
              <td>{{ payment.id }}</td>
              <td>{{ payment.description }}</td>
              <td>{{ formatTimestamp(payment.timestamp) }}</td>
              <td>{{ payment.price }}</td>
              <td>{{ payment.count }}</td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-else-if="currentCategory === 'reports'">
        <table>
          <thead>
            <tr>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="report in store.currentUser.user.reports" :key="report.id">
              <td>{{ report }}</td>
            </tr>
          </tbody>
        </table>
      </template>
      <!-- Add more templates for each category -->
    </div>
  </div>
</template>

<script>
import { store } from '@/utils/store'
export default {
  data() {
    return {
      currentCategory: 'info',
      store
    }
  },
  methods: {
    switchCategory(category) {
      this.currentCategory = category
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleDateString()
    }
  }
}
</script>

<style>
.profile-container {
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
}

.profile-buttons {
  border-right: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.profile-buttons button {
  margin: 8px;
}

.active-button {
  background-color: rgb(59, 59, 59); /* Change this to your desired color */
  color: white;
}

.profile-content {
  margin: 20px;
  flex: 1; /* Fill remaining space */
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 14px; /* Adjust font size as needed */
}

th,
td {
  border: 1px solid #ddd; /* Border color for table cells */
  padding: 10px; /* Adjust cell padding as needed */
  text-align: left;
}

th {
  background-color: #f2f2f2; /* Background color for table headers */
  font-weight: bold; /* Make table headers bold */
}

tr:hover {
  background-color: #f5f5f5; /* Background color on hover */
}
</style>
