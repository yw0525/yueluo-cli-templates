<template>
  <main class="custom-main">
    <slot />
  </main>
</template>

<script lang="ts">
export default {
  name: 'CustomMain',
};
</script>

<script setup lang="ts"></script>

<style lang="scss">
@import '../styles/mixin';

@include b(main) {
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $--main-padding;
}
</style>
