<template>
  <div class="rounded-lg p-[4px] relative cursor-pointer card">
    <div class="absolute top-0 left-0 h-full w-full rounded-2xl gradient-border"></div>
    <div class="absolute top-0 left-0 h-full w-full gradient" style="border-radius: 18px"></div>
    <div class="overflow-hidden bg-black" style="border-radius: 14px">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  &:hover {
    .gradient {
      opacity: 1;
    }
  }
}

.gradient {
  inset: 0;
  z-index: -1;
  opacity: 0.5;
  transition: opacity 0.5s ease;
  filter: blur(20px);
  animation: backgroundShift 5s infinite alternate;
  background-size: 400% 400%;
  background-image: radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent),
    radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent),
    radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316);
}

.gradient-border {
  inset: 0;
  z-index: -1;
  opacity: 0.6;
  transition: opacity 0.5s ease;
  animation: backgroundShift 5s infinite alternate;
  background-size: 400% 400%;
  background-image: radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent),
    radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent),
    radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316);
}
@keyframes backgroundShift {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
