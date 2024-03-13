<template>
  <div
    class="main grid"
    :style="{ 'grid-template-columns': `repeat(${props.columns}, minmax(0, 1fr))` }"
    @mousemove="mouseMove"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: {
    type: Number,
    default: 3
  }
});

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
  gap: 8px;
  width: fit-content;
}
</style>
