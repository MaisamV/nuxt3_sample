<template>
  <ClientOnly/>
  <section>
    <h3>This page will be displayed at the /room route.</h3>
    <p>name is {{roomRepo.name}}</p>
    <p>description is {{roomRepo.description}}</p>
  </section>
</template>
<script setup lang="ts">
import {getRoomRepo} from "~/data/repo/room";

const route = useRoute()
const roomRepo = getRoomRepo();
roomRepo.fetch(route.params.id as string)
console.log(route.path)
// When accessing /posts/1, route.params.id will be 1
console.log()
</script>