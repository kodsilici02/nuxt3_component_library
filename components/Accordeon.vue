<template>
  <div class="flex flex-col pb-[8px]" style="border-bottom: 1px solid rgba(155, 155, 155, 0.3)">
    <button class="sticky top-0 left-0 h-fit" @click="toggleAccordeon()">
      <div class="flex justify-between px-[8px] py-[8px] font-bold">
        <slot name="trigger"></slot
        ><i
          :class="{ 'rotate-[-180deg]': open }"
          class="fa fa-chevron-down transition-all"
          :style="{ transitionDuration: props.duration + 's' }"></i>
      </div>
    </button>
    <div class="max-h-0 overflow-auto" ref="container">
      <div ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
});

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  },
  maxHeight: {
    type: Number,
    default: 300
  },
  buttonBackground: {
    type: String,
    default: 'black'
  },
  duration: {
    type: Number,
    default: 0.4
  }
});

watch(
  () => props.open,
  newVal => {
    toggleAccordeon();
    open.value = newVal;
  }
);

const emits = defineEmits(['handleToggle']);

const open = ref(false);

const content = ref();
const container = ref();

function toggleAccordeon() {
  open.value = !open.value;
  if (open.value) {
    if (content.value.offsetHeight > props.maxHeight) {
      gsap.to(container.value, { maxHeight: props.maxHeight, duration: props.duration, ease: 'power2.out' });
    } else {
      gsap.to(container.value, { maxHeight: content.value.offsetHeight, duration: props.duration, ease: 'power2.out' });
    }
  } else {
    gsap.to(container.value, { maxHeight: 0, duration: props.duration, ease: 'power2.out' });
  }
  emits('handleToggle');
}
</script>
