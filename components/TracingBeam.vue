<template>
  <div ref="containerRef" class="ml-4 flex h-full" aria-hidden="true">
    <svg :viewBox="`0 0 20 ${svgHeight}`" width="20" height="100%" class="transition-all duration-300 ease-in">
      <path :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`" fill="none" stroke="#9091A0" stroke-opacity="0.16"></path>
      <path
        :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`"
        fill="none"
        stroke="url(#gradient)"
        stroke-width="1.25"></path>
      <defs>
        <linearGradient ref="gradient" id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="0">
          <stop stop-color="#18CCFC" stop-opacity="0"></stop>
          <stop offset="20%" stop-color="#18CCFC"></stop>
          <stop offset="80%" stop-color="#6344F5"></stop>
          <stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import gsap from 'gsap';
const containerRef = ref(null);
const svgHeight = computed(() => {
  if (containerRef.value) {
    return containerRef.value.offsetHeight;
  } else {
    return 500;
  }
});

const gradient = ref();

// Example reactive gradient positions, replace with your scroll-linked logic
const gradientStart = ref(0);
const gradientEnd = ref(svgHeight.value);

onMounted(() => {
  getScrollValues(window.scrollY, svgHeight.value);
  window.addEventListener('scroll', () => {
    getScrollValues(window.scrollY, svgHeight.value);
  });
});

function getScrollValues(scrollY, height) {
  const scrollYProgress = scrollY / height;

  const y1 = scrollY;
  const y2 = height * scrollYProgress * 2;

  gsap.to(document.querySelector('#gradient'), {
    attr: { y1: y1, y2: y2 },
    duration: 0.8,
    ease: 'ease-in-out'
  });
}

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
