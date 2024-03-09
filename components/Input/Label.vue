<template>
  <div class="wrapper rounded-xl">
    <input type="text" class="w-full" />
    <span class="span">Label</span>
    <div class="underline"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
input {
  padding: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    transform: all 0.2s ease-in;
    opacity: 0;
  }
  &:focus::placeholder {
    opacity: 1;
  }
  &:focus ~ .span {
    top: -1.2rem;
    font-size: 12px;
  }
  &:focus ~ .underline::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.span {
  padding: 4px;
  display: flex;
  pointer-events: none;
  position: absolute;
  top: 0px;
  left: 0;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}
.underline {
  position: relative;
  height: 0.12rem;
  width: 100%;
  background-color: gray;
  border-radius: 9999px;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    position: relative;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease-in;
    background: linear-gradient(90deg, rgba(71, 179, 148, 1) 0%, rgba(53, 185, 207, 1) 100%);
  }
}
</style>
