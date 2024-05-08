<template>
  <div class="flex relative main" ref="main">
    <div
      v-for="(item, index) in items"
      v-wave
      class="cursor-pointer px-[16px] py-[8px] rounded-lg link"
      ref="link"
      @click="handleClick(index)">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Number,
    default: 0
  },
  items: {
    type: Array,
    default: ['Tab 1', 'Tab 2']
  }
});

const emits = defineEmits(['handleClick']);
const link = ref();
const main = ref();
const active_el = ref(props.active);

watch(
  () => props.active,
  newVal => {
    active_el.value = newVal;
  }
);

watch(active_el, newVal => {
  active_el.value = newVal;
  drawUnderline();
});

onMounted(() => {
  drawUnderline();
});

function drawUnderline() {
  let element = link.value[active_el.value];
  let width = element.offsetWidth;
  let element_left = element.getBoundingClientRect().left;
  let main_left = main.value.getBoundingClientRect().left;
  main.value.style.setProperty('--left', `${element_left - main_left}px`);
  main.value.style.setProperty('--width', `${width}px`);
}

function handleClick(item) {
  active_el.value = item;
  emits('handleClick');
}
</script>

<style lang="scss" scoped>
.main {
  --left: 0px;
  --width: 0px;
  transition: all 0.4s ease;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 100vh;
    background-color: gray;
  }
  &::after {
    content: '';
    transition: all 0.4s ease;
    position: absolute;
    bottom: 0;
    left: var(--left);
    width: var(--width);
    height: 2px;
    border-radius: 100vh;
    background-image: linear-gradient(90deg, rgba(24, 204, 252, 1) 0%, rgba(99, 68, 245, 1) 100%);
  }
}
.link {
  transition: all 0.2s ease-out;
  &:hover {
    background-color: rgba(225, 225, 225, 0.07);
  }
}
</style>
