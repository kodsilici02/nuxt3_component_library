<template>
  <div class="rounded-lg" :style="{ backdropFilter: `blur(${props.blur}px)`, background: props.background }"></div>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    default: 'transparent'
  },
  blur: {
    type: Number,
    default: 10
  }
});
</script>

<style lang="scss" scoped></style>
