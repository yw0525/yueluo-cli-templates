<template>
  <div class="layout-default">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~~/components/layouts/Header.vue';
import Footer from '~~/components/layouts/Footer.vue';
</script>

<style lang="scss" scoped>
.layout-default {
  main {
    height: calc(100vh - 84px);
  }
}
</style>
