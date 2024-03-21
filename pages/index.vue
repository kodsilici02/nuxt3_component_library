<template>
  <div
    class="w-full h-[100vh] flex flex-col gap-3 justify-center items-center mt-10"
    style="background-image: url('/profile.png'); background-repeat: no-repeat; background-position: center">
    <Glass class="w-52 h-52 border"></Glass>
  </div>
</template>

<script setup>
const open = ref(false);
function deneme() {
  open.value = true;
}
</script>

<style lang="scss" scoped></style>
