<script>
export default {
  data() {
    return {
      navItems: ['Check VIN', 'information', 'support'],
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

<template>
  <nav class="sticky bg-gray-300 shadow rounded-b-md">
    <ul class="flex items-center justify-around">
      <li v-for="page in navItems" :key="page" class="flex-1">
        <a
          @click="handleClick(page)"
          :href="'#' + page.toLowerCase().replace(' ', '_')"
          :class="{
            'hover:text-black': selectedPage !== page,
            'text-black': selectedPage === page,
            'text-gray-500': selectedPage !== page,
            'cursor-pointer': true,
            flex: true,
            'flex-col': true,
            'items-center': true,
            'p-2': true,
            'text-sm': true,
            capitalize: true
          }"
        >
          <img :src="`/icon/${page.toLowerCase().replace(' ', '_')}_icon.png`" class="w-5" />
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>
