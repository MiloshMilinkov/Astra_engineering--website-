<template>
    <div class="slideshow">
      <div class="slideshow-overlay" @click="close"></div>
      <div class="slideshow-content">
        <span class="close-btn" @click="close">&times;</span>
        <img :src="currentImage" alt="Slideshow Image" class="slideshow-image">
        <div class="slideshow-controls">
          <button @click="prevImage">&laquo; Prev</button>
          <button @click="nextImage">Next &raquo;</button>
        </div>
      </div>
    </div>
  </template>
  
  #### Script
  
  ```vue
  <script setup>
  import { ref, watch } from 'vue';
  const props = defineProps({
    images: Array
  });
  const emit = defineEmits(['close']);
  const currentIndex = ref(0);
  const currentImage = ref(props.images[0]);
  
  watch(() => props.images, (newImages) => {
    currentImage.value = newImages[0];
  });
  
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
    currentImage.value = props.images[currentIndex.value];
  };
  
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
    currentImage.value = props.images[currentIndex.value];
  };
  
  const close = () => {
    emit('close');
  };
  </script>
  
  #### Style
  
  ```vue
  <style scoped>
  .slideshow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .slideshow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .slideshow-content {
    position: relative;
    z-index: 1001;
    max-width: 80%;
    max-height: 80%;
    text-align: center;
  }
  
  .slideshow-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .slideshow-controls {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  button {
    background-color: #FFD700;
    color: #2B3A55;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #2B3A55;
    color: #FFD700;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 2rem;
    color: #FFF;
    cursor: pointer;
  }
  </style>
  