<template>
    <div class="banner">
      <div class="banner-content">
        <h1>My Company Name</h1>
      </div>
      <video autoplay muted loop class="banner-video" v-if="videoSrc">
        <source :src="videoSrc" type="video/mp4">
      </video>
      <div class="banner-slideshow" v-else>
        <img :src="currentImage" alt="Banner Image" class="banner-image">
      </div>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  .banner {
    position: relative;
    height: 50vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .banner-content {
    position: absolute;
    z-index: 2;
    text-align: center;
  }
  .banner-content h1 {
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .banner-video, .banner-slideshow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  