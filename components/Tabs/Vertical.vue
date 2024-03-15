<template>
  <div class="flex flex-col relative main" ref="main">
    <div v-for="(item, index) in items" class="cursor-pointer px-3 py-1 rounded-lg" ref="link" @click="handleClick(index)">{{ item }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Number,
    default: 0
  }
});

const emits = defineEmits(['handleClick']);
const items = ['home', 'profile', 'liked', 'following'];
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
  let height = element.offsetHeight;
  let element_top = element.getBoundingClientRect().top;
  let main_top = main.value.getBoundingClientRect().top;
  main.value.style.setProperty('--top', `${element_top - main_top}px`);
  main.value.style.setProperty('--height', `${height}px`);
}

function handleClick(item) {
  active_el.value = item;
  emits('handleClick');
}
</script>

<style lang="scss" scoped>
.main {
  --top: 0px;
  --height: 0px;
  transition: all 0.4s ease;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 2px;
    height: 100%;
    border-radius: 100vh;
    background-color: gray;
  }
  &::after {
    content: '';
    transition: all 0.4s ease;
    position: absolute;
    top: var(--top);
    left: 0;
    width: 2px;
    height: var(--height);
    border-radius: 100vh;
    background-image: linear-gradient(180deg, rgba(24, 204, 252, 1) 0%, rgba(99, 68, 245, 1) 100%);
  }
}
</style>
