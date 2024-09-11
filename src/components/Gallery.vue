<template>
  <div class="gallery">
    <h2>NAŠI PROJEKTI</h2>
    <div class="gallery-grid">
      <div v-for="location in locations" :key="location.name" class="gallery-item" @click="openSlideshow(location)">
        <img :src="location.cover" :alt="location.name" class="gallery-image" loading="lazy" />
        <div class="location-name">{{ location.displayName }}</div>
      </div>
    </div>
    <Slideshow v-if="showSlideshow" :images="currentImages" :title="currentLocationName" @close="closeSlideshow" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Slideshow from './Slideshow.vue';

// Dynamically import all images from the specified folder
const imageModules = import.meta.glob('@/assets/Gallery/*/*.*');

// Reactive state for locations and slideshow
const locations = ref([]);
const showSlideshow = ref(false);
const currentImages = ref([]);
const currentLocationName = ref('');

// Function to load images dynamically and lazily
const loadImages = async () => {
  const imagePaths = Object.keys(imageModules);

  const locationMap = {};

  // Loop over all images and group them by folder (location)
  for (const path of imagePaths) {
    const folderName = path.split('/')[4]; // Extract the folder name (e.g., "Mesto1")
    if (!locationMap[folderName]) {
      locationMap[folderName] = {
        displayName: folderName,
        cover: '',
        images: [],
      };
    }
    const image = await imageModules[path]();
    locationMap[folderName].images.push(image.default);

    // Set the first image as the cover
    if (!locationMap[folderName].cover) {
      locationMap[folderName].cover = image.default;
    }
  }

  // Convert locationMap to an array
  locations.value = Object.values(locationMap);
};

// Initialize the gallery with images on mount
onMounted(() => {
  loadImages();
});

// Slideshow controls
const openSlideshow = (location) => {
  currentImages.value = location.images;
  currentLocationName.value = location.displayName;
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
  color: #2b3a55;
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
  height: fit-content;
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
