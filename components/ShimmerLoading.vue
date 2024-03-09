<template>
  <div class="overflow-hidden">
    <div
      class="w-full h-full relative overflow-hidden shimmer"
      :style="{ '--background': props.background, '--shimmer': props.shimmer }"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    default: '#c2c2c2'
  },
  shimmer: {
    type: String,
    default: '#ffffff'
  }
});
</script>

<style lang="scss" scoped>
.shimmer {
  --background: #c2c2c2;
  --shimmer: #ffffff;
  background-color: var(--background);
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 300%;
    width: 100%;
    animation: shimmer 2s infinite;
    background: linear-gradient(90deg, transparent, var(--shimmer), transparent);
  }
}

@keyframes shimmer {
  from {
    transform: rotate(30deg) translateX(-200%);
  }
  to {
    transform: rotate(30deg) translateX(200%);
  }
}
</style>
