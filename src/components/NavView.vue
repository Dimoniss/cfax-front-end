<template>
  <w-flex :gap="3" justify-center class="my1">
    <ul class="horizontal-buttons">
      <li v-for="page in navItems" :key="page">
        <a @click="handleClick(page)" :href="'#' + page.toLowerCase().replace(' ', '_')">
          <img :src="`/icon/${page.toLowerCase().replace(' ', '_')}_icon.png`" class="icon" />
          {{ page }}
        </a>
      </li>
    </ul>
  </w-flex>
</template>

<script>
export default {
  data() {
    return {
      navItems: ['Check VIN', 'Price', 'Information', 'Support'],
      selectedPage: 'Check VIN'
    }
  },
  methods: {
    handleClick(page) {
      this.selectedPage = page
      this.$emit('update-current-page', page)
    }
  }
}
</script>

<style scoped>
/* Style for icon */
.icon {
  width: 17px; /* Adjust the width to make the icon smaller */
  height: auto; /* Maintain aspect ratio */
}
/* Style for horizontal buttons */
.horizontal-buttons {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.horizontal-buttons li {
  margin-right: 10px; /* Adjust spacing between buttons */
}

.horizontal-buttons li:last-child {
  margin-right: 0; /* Remove margin from the last button */
}
</style>
