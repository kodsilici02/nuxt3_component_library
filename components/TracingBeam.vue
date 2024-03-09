<template>
  <div ref="containerRef" class="ml-4 block min-h-[50vh]" aria-hidden="true">
    <svg :viewBox="`0 0 20 ${svgHeight}`" width="20" :height="svgHeight" class="transition-all duration-300 ease-in">
      <path :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`" fill="none" stroke="#9091A0" stroke-opacity="0.16"></path>
      <path
        :d="`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`"
        fill="none"
        stroke="url(#gradient)"
        stroke-width="1.25"></path>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" :y1="gradientStart" :y2="gradientEnd">
          <stop stop-color="#18CCFC" stop-opacity="0"></stop>
          <stop offset="0.5" stop-color="#18CCFC"></stop>
          <stop offset="0.325" stop-color="#6344F5"></stop>
          <stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const containerRef = ref(null);
const svgHeight = ref(500); // Static height for demonstration; adjust as needed

// Example reactive gradient positions, replace with your scroll-linked logic
const gradientStart = ref(0);
const gradientEnd = ref(svgHeight.value * 0.8);

// Example logic to adjust gradient based on scroll, replace with your own logic
onMounted(() => {
  const handleScroll = () => {
    // Adjust these values based on scroll position or other dynamic criteria
    gradientStart.value = Math.min(window.scrollY, svgHeight.value * 0.4);
    gradientEnd.value = Math.min(window.scrollY + 200, svgHeight.value);
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup on component unmount
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>
