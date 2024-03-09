<template>
  <button @click="emits('handleClick')" class="w-fit rounded-full flex conic-border" style="color: var(--text-color)">
    <div class="background z-[-1]"></div>
    <div class="w-fit h-fit flex gap-3 rounded-full px-3 py-2 z-10" :style="{ 'background-color': props.backgroundColor }">
      <div>
        <slot></slot>
      </div>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: 'black'
  }
});
const emits = defineEmits(['handleClick']);
</script>

<style scoped>
.conic-border {
  position: relative;
  cursor: pointer;
  --width: 2px;
  --d: 5s; /* animation duration */
  --s: 1;
}
.background {
  position: absolute;
  z-index: 0;
  left: 50%;
  top: 50%;
  background-image: conic-gradient(from var(--a), transparent, #08f, #f03 50%, transparent);
  --_a: ;
  animation: border linear infinite calc(var(--d) / var(--s));
  animation-play-state: paused;
  background-size: 100% 100%;
  border-radius: 9999px;
  width: calc(100% + var(--width));
  height: calc(100% + var(--width));
  translate: -50% -50%;
  scale: 1 1;
  transition: scale 500ms linear;
}
.conic-border:hover {
  --width: 2px;
}
.conic-border:hover .background {
  /*   scale: 1.025 1.1; */
  animation-play-state: running;
}

@property --a {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

@keyframes border {
  0% {
    --a: 0deg;
  }
  100% {
    --a: 360deg;
  }
}
</style>
