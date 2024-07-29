<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar/>
  <RouterView v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <Component :is="Component" />
    </transition>
  </RouterView>
</template>

<style >

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat',  sans-serif;
  padding: 0;
  margin: 0;
}

.fade-enter-from,
.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.2s ease-out;
}
</style>
