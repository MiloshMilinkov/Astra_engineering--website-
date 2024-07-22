<template>
    <div class="gallery">
      <h2>Naši projekti</h2>
      <div class="gallery-grid">
        <div v-for="location in locations" :key="location.name" class="gallery-item" @click="openSlideshow(location)">
          <img :src="location.cover" :alt="location.name" class="gallery-image">
          <div class="location-name">{{ location.name }}</div>
        </div>
      </div>
      <!-- <Slideshow v-if="showSlideshow" :images="currentImages" @close="closeSlideshow" /> -->
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import Slideshow from './Slideshow.vue';

// Dynamically import all images from the Gallery folder
const imageModules = import.meta.glob('@/assets/Gallery/*/*.jpeg');

const locations = ref([
  { name: 'Mesto1', cover: '', images: [] },
  { name: 'Mesto2', cover: '', images: [] },
  { name: 'Mesto3', cover: '', images: [] },
  { name: 'Mesto1', cover: '', images: [] },
  { name: 'Mesto2', cover: '', images: [] },
  { name: 'Mesto3', cover: '', images: [] },
  { name: 'Mesto1', cover: '', images: [] },
  { name: 'Mesto2', cover: '', images: [] }
  // Add more locations as needed
]);

const loadImages = async () => {
  const imagePaths = Object.keys(imageModules);
  for (const location of locations.value) {
    const locationImages = imagePaths.filter(path => path.includes(location.name));
    if (locationImages.length > 0) {
      location.cover = (await imageModules[locationImages[0]]()).default; // Set the cover image
      location.images = await Promise.all(locationImages.map(async imgPath => (await imageModules[imgPath]()).default));
    }
  }
};

onMounted(() => {
  loadImages();
});

const showSlideshow = ref(false);
const currentImages = ref([]);

const openSlideshow = (location) => {
  currentImages.value = location.images;
  showSlideshow.value = true;
};

const closeSlideshow = () => {
  showSlideshow.value = false;
};
</script>


<style scoped>
.gallery {
  padding: 5rem;
  text-align: center;
}

.gallery h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2B3A55;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
}

.gallery-item {
  position: relative;
  width: 400px;
  cursor: pointer;
}

.gallery-image {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.location-name {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 0 0 10px 10px;
}
</style>

