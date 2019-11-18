<template>
  <div class="container">
    <nuxt-link :to="{ name: 'mescroll' }">mescroll demos</nuxt-link>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
