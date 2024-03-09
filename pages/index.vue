<template>
  <div class="w-full h-full min-h-[100vh] flex flex-col gap-3 justify-center items-center">
    <TooltipAnimated>
      <template v-slot:tooltip>
        <ButtonUnderGradient><div class="w-fit flex whitespace-nowrap">Tailwind CSS</div></ButtonUnderGradient>
      </template>
      <template v-slot:content>
        <img src="/profile.png" class="w-12 h-12 rounded-full object-cover object-center" />
      </template>
    </TooltipAnimated>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
