<template>
  <div class="slideshow">
    <div class="slideshow-overlay" @click="close"></div>
    <div class="slideshow-content" @mouseenter="hideControls" @mouseleave="showControls">
      <span class="close-btn" @click="close">&times;</span>
      <img :src="currentImage" alt="Slideshow Image" class="slideshow-image" />
      <button v-if="showArrows" @click="prevImage" class="arrow-btn left-arrow">&laquo;</button>
      <button v-if="showArrows" @click="nextImage" class="arrow-btn right-arrow">&raquo;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['close']);

const currentIndex = ref(0);
const showArrows = ref(true);

const currentImage = computed(() => props.images[currentIndex.value]);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};

const close = () => {
  emit('close');
};
</script>

<style scoped>
.slideshow {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.slideshow-overlay {
  position: absolute;
  inset: 0;
  background: transparent;
  cursor: pointer;
}

.slideshow-content {
  position: relative;
  max-width: 60%;
  max-height: 80%;
  padding: 1rem;
  background-color: #2b3a55;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain; 
}

.slideshow-image {
  width: 100%;
  max-height: 75vh;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}


.arrow-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.left-arrow {
  left: -50px;
}

.right-arrow {
  right: -50px;
}

.arrow-btn:hover {
  background-color: #ffd700;
  color: #2b3a55;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #ffd700;
}
</style>
