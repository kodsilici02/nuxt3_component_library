<template>
  <button v-wave class="px-3 py-2 rounded-lg button cursor-pointer" @click="emits('handleClick')">
    <slot></slot>
  </button>
</template>

<script setup>
const emits = defineEmits(['handleClick']);
</script>

<style lang="scss" scoped>
.button {
  transition: scale 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
  }
}
</style>
