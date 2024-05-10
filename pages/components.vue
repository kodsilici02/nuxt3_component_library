<template>
  <div class="w-full h-full flex">
    <div class="h-full w-72 border-r-[1px] border-gray-400 flex flex-col py-[32px]">
      <NuxtLink
        :to="'/components/' + route.path"
        v-for="route in allRoutes"
        class="link w-full flex justify-left px-[32px] py-[4px] cursor-pointer font-[500]"
        >{{ formatText(route.path) }}</NuxtLink
      >
    </div>
    <div class="h-full flex-1 overflow-y-auto">
      <NuxtPage :transition="{ name: transitionName, mode: 'out-in' }"></NuxtPage>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const vueRoute = useRoute();
const router = useRouter();
const allRoutes = ref([]);

router.options.routes[0].children.sort().forEach((route, index) => {
  if (route.path != '') {
    allRoutes.value.push({ index: index, path: route.path });
  }
});

function formatText(text) {
  return text
    .replace(/\/components\//g, '')
    .replace(/-/g, ' ')
    .replace(/(?:^|\s)\S/g, match => match.toUpperCase())
    .replace(/(\d)([a-z])/gi, function (match, number, letter) {
      return number + letter.toUpperCase();
    });
}

const transitionName = ref('up');

const currentIndex = ref();

onMounted(() => {
  try {
    currentIndex.value = allRoutes.value.find(el => formatText(el.path) == formatText(vueRoute.path)).index;
  } catch (error) {
    console.log(error);
  }
});
router.beforeEach((to, from) => {
  if (to.fullPath.includes('/components')) {
    let index = allRoutes.value.find(el => formatText(el.path) == formatText(to.path)).index;
    if (index > currentIndex.value) {
      transitionName.value = 'up';
    } else {
      transitionName.value = 'down';
    }
  }
});
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
