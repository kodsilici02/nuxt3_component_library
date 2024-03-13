<template>
  <div class="main" @mousemove="mouseMove" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <slot></slot>
  </div>
</template>

<script setup>
const x = ref();
const y = ref();
const isHovered = ref(false);

function mouseMove() {
  x.value = event.clientX;
  y.value = event.clientY;
}

function mouseEnter() {
  isHovered.value = true;
}

function mouseLeave() {
  isHovered.value = false;
}

provide('clientX', x);
provide('clientY', y);
provide('isHovered', isHovered);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  width: fit-content;
}
</style>
