<template>
  <section>
    <h3>This page will be displayed at the /room route.</h3>
  </section>
</template>
<script setup lang="ts">
const route = useRoute()

console.log(route.path)
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>