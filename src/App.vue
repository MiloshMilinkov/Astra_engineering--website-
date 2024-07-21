<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
<Navbar/>
<RouterView/>
</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
body {
  font-family: 'Montserrat',  sans-serif;
  padding: 0;
  margin: 0;
}
</style>
