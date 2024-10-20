<template>
  <div>
    <main>
      <Banner />
      <div id="gallery">
        <Gallery />
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  import Gallery from '../components/Gallery.vue';
  import Banner from '../components/Banner.vue';
  const router = useRouter();

  const handleScroll = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      const rect = galleryElement.getBoundingClientRect();
      const triggerTrashold = 300;
      if (rect.top < window.innerHeight - triggerTrashold && rect.bottom >= triggerTrashold) {
        router.push('/gallery');
      }
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>



