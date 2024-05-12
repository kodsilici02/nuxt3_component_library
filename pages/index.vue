<template>
  <div class="w-full h-[100vh] flex flex-col gap-3 justify-center items-center mt-10">
    <NuxtLink :to="'/components'">components</NuxtLink>
    <NuxtLink :to="'/deneme'">deneme</NuxtLink>
    <Example></Example>
  </div>
</template>

<script setup>
const open = ref(false);
</script>

<style lang="scss" scoped></style>
