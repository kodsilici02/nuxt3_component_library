<template>
  <div class="rounded-full p-[2px] relative cursor-pointer">
    <div class="w-full h-full rounded-full absolute top-0 left-0 spin z-[-1]"></div>
    <div class="rounded-full overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.spin {
  background-size: 100% 100%;
  animation: border 4s infinite linear;
  background-image: conic-gradient(from var(--a), transparent 60%, rgb(52, 236, 122) 100%);
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
