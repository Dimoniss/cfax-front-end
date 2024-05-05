<template>
  <div class="support-container">
    <h2 class="support-header">Support</h2>
    <div class="support-content">
      <p>Welcome to our support page! We are here to assist you.</p>
      <ul>
        <li><strong>Support Hours:</strong> Monday to Friday, 9:00 AM to 6:00 PM</li>
        <li><strong>Email:</strong> support@example.com</li>
        <li><strong>Phone:</strong> +1234567890</li>
      </ul>
      <p>
        For urgent assistance outside of business hours, please contact our emergency support team.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SupportView'
}
</script>

<style>
.support-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.support-header {
  font-size: 24px;
  margin-bottom: 10px;
}

.support-content {
  font-size: 16px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
}
</style>
