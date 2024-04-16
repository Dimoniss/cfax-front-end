<template>
  <div class="html-viewer">
    <iframe :src="htmlContent" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    htmlContent: String // HTML content as a prop
  }
}
</script>

<style scoped>
.html-viewer {
  width: 100%;
  height: 100%;
}
</style>
