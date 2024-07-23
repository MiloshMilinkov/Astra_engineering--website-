<script setup lang="ts">
  import Navbar from '../components/Navbar.vue';
  import Gallery from '../components/Gallery.vue';
  import Banner from '../components/Banner.vue';
</script>

<template>
  <div class="page-wrapper">
    <main>
      <Banner />
      <Gallery />
    </main>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
