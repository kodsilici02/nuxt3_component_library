<template>
  <div class="w-full h-[100vh] flex flex-col gap-3 justify-center items-center mt-10">
    <button @click="deneme">deneme</button>
    <SideBar :open="open" @handle-close="open = false"></SideBar>
  </div>
</template>

<script setup>
const open = ref(false);
function deneme() {
  open.value = true;
}
</script>

<style lang="scss" scoped></style>
