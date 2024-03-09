<template>
  <Transition name="modal">
    <div v-if="open" class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] pointer-events-none">
      <div><slot name="modal"></slot></div>
    </div>
  </Transition>
  <!--Background-->
  <Transition name="fade">
    <div v-if="open" class="fixed top-0 left-0 w-full h-full">
      <div class="w-full h-full opacity-50 bg-black z-[999]" @click="emits('closeModal')"></div>
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['closeModal']);
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-enter-active,
.modal-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>
