<template>
  <div class="w-fit transition-all duration-[0.4s] ease" :class="{ shadow: isHovered }" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const props = defineProps({
  translateZ: {
    type: Number,
    default: 30
  }
});
const isHovered = inject('isHovered');
const styleObject = computed(() => ({
  transform: isHovered.value ? `translateZ(${props.translateZ}px)` : 'translateZ(0px)'
}));
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0px 0px 50px 5px rgba(0, 0, 0, 1);
}
</style>
