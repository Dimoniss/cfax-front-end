<template>
  <div class="info-container">
    <h2 class="info-header">Information</h2>
    <div class="info-content">
      <p>Welcome to our platform! Here is some information about us:</p>
      <ul>
        <li><strong>Company Name:</strong> XYZ Corporation</li>
        <li><strong>Location:</strong> City, Country</li>
        <li><strong>Services:</strong> Providing top-notch solutions</li>
        <li><strong>Contact:</strong> Email: info@example.com | Phone: +123456789</li>
      </ul>
      <p>
        We are dedicated to delivering high-quality services and ensuring customer satisfaction.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationView'
}
</script>

<style>
.info-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.info-header {
  font-size: 24px;
  margin-bottom: 10px;
}

.info-content {
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
