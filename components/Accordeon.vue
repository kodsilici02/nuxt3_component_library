<template>
  <div class="w-full flex flex-col">
    <div class="w-full main overflow-auto" ref="container" :style="{ maxHeight: max }">
      <div class="w-full rounded-lg" ref="content">
        <slot></slot>
      </div>
    </div>
    <div
      class="sticky bottom-0 left-0 w-full h-fit flex justify-center show-more cursor-pointer"
      :style="{ 'background-color': props.buttonBackground }"
      ref="show_more"
      @click="toggleAccordeon()">
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  openText: {
    type: String,
    default: ''
  },
  closeText: {
    type: String,
    default: ''
  },
  maxHeight: {
    type: Number,
    default: 300
  },
  buttonBackground: {
    type: String,
    default: 'black'
  }
});

const open = ref(false);
const text = computed(() => {
  if (open.value) {
    return props.openText;
  } else {
    return props.closeText;
  }
});

const content = ref();

const max = computed(() => {
  if (open.value) {
    if (content.value.offsetHeight < props.maxHeight) {
      return content.value.offsetHeight + 'px';
    } else {
      return props.maxHeight + 'px';
    }
  } else {
    return 0 + 'px';
  }
});

const container = ref();

function toggleAccordeon() {
  open.value = !open.value;
}
</script>

<style lang="scss" scoped>
.main {
  transition: all 0.2s ease-in;
  max-height: 0;
}
</style>
