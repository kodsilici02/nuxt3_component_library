<template>
  <div class="w-full h-full flex justify-center items-center">
    <CardContainer
      :multiplierX="30"
      :multiplierY="20"
      class="w-72 aspect-[1/1.3] rounded-2xl gradient flex justify-center items-center flex-col gap-3 relative">
      <div class="absolute top-0 left-0 p-[2px] w-full h-full gradient rounded-[inherit]">
        <div class="w-full h-full rounded-[inherit] background"></div>
      </div>
      <CardItem class="rounded-full flex justify-center" :translateZ="50" :boxShadow="false">
        <img class="w-16 h-16" src="https://i.ibb.co/sV0cq27/web.png" />
      </CardItem>
      <CardItem class="w-2/4 p-3 text-center lg-text font-bold customFont" :translateZ="70" :boxShadow="false">Web Developer </CardItem>
    </CardContainer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gradient {
  background: rgb(22, 219, 179);
  background: linear-gradient(160deg, #16dbb3 0%, #9142de 100%);
}
.background {
  background-color: var(--background);
}
</style>
