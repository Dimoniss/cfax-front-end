<template>
  <b>Profile</b>
</template>
<script></script>
methods: { handleClick(page) { this.selectedPage = page this.$emit('update-current-page', page) } }
