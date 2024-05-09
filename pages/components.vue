<template>
  <div class="w-full h-full flex">
    <div class="h-full w-72 border-r-[1px] border-gray-400 flex flex-col py-[32px]">
      <NuxtLink
        :to="'/components/' + route"
        v-for="route in allRoutes"
        class="link w-full flex justify-left px-[32px] py-[8px] cursor-pointer font-[500]"
        >{{ formatText(route) }}</NuxtLink
      >
    </div>
    <div class="h-full flex-1 overflow-y-auto">
      <NuxtPage></NuxtPage>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const allRoutes = ref([]);
router.options.routes[0].children.sort().forEach(route => {
  if (route.path != '') {
    allRoutes.value.push(route.path);
  }
});

function formatText(text) {
  return text
    .replace(/components-/g, '')
    .replace(/-/g, ' ')
    .replace(/(?:^|\s)\S/g, match => match.toUpperCase())
    .replace(/(\d)([a-z])/gi, function (match, number, letter) {
      return number + letter.toUpperCase();
    });
}
</script>

<style lang="scss" scoped>
.link {
  color: var(--text-gray);
  transition: all 0.2s ease;
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
}
.router-link-exact-active {
  color: aliceblue;
}
</style>
