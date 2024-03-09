<template>
  <button
    class="bg-slate-800 no-underline h-fit w-auto group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
    <div class="relative flex items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 w-auto">
      <slot></slot>
    </div>
    <span
      class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped></style>
