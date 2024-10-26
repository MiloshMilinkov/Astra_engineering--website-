<template>
  <div class="gallery">
    <h2>NAŠI PROJEKTI</h2>
    <div class="gallery-grid">
      <div v-for="location in locations" :key="location.displayName" class="gallery-item" @click="openSlideshow(location)">
        <img :src="location.cover" :alt="location.displayName" class="gallery-image" loading="lazy" />
        <div class="location-name">{{ location.displayName }}</div>
      </div>
    </div>
    <Slideshow v-if="showSlideshow" :images="currentImages" :title="currentLocationName" @close="closeSlideshow" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Slideshow from './Slideshow.vue';

const imageModules = import.meta.glob('@/assets/Gallery/*/*.*');

const locations = ref([]);
const showSlideshow = ref(false);
const currentImages = ref([]);
const currentLocationName = ref('');

const getFolderAndPrefix = (path) => {
  const parts = path.split('/');
  const folderName = parts[4]; 
  const prefix = parseInt(parts.pop().split('_')[0], 10); 
  return { folderName, prefix };
};

const loadImages = async () => {
  const locationMap = {};

  for (const path of Object.keys(imageModules)) {
    const { folderName, prefix } = getFolderAndPrefix(path);
    if (!locationMap[folderName]) {
      locationMap[folderName] = { displayName: folderName, cover: '', images: [], paths: [] };
    }
    locationMap[folderName].paths.push({ prefix, path });
  }

  for (const folder of Object.values(locationMap)) {
    folder.paths.sort((a, b) => a.prefix - b.prefix);

    const firstImageModule = await imageModules[folder.paths[0].path]();
    folder.cover = firstImageModule.default;

    folder.images = folder.paths.map(file => file.path);
  }

  locations.value = Object.values(locationMap);
};

const openSlideshow = async (location) => {
  currentLocationName.value = location.displayName;

  const images = await Promise.all(
    location.images.map(async (filePath) => {
      const imgModule = await imageModules[filePath]();
      return imgModule.default;
    })
  );

  currentImages.value = images;
  showSlideshow.value = true;
};

const closeSlideshow = () => {
  showSlideshow.value = false;
  currentImages.value = []; 
};

onMounted(loadImages);
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
  align-items: flex-start;
}

.gallery-item {
  position: relative;
  max-width: 400px;
  cursor: pointer;
  flex: 1 1 auto;
}

.gallery-image {
  width: 100%;
  height: auto;
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
