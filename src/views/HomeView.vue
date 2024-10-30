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
  import { useHead } from '@vueuse/head';
  const router = useRouter();

    useHead({
    title: 'Home - astra-engineering',
    meta: [
      { name: 'description', content: 'Welcome to astra-engineering - Explore our gallery and discover more about us!' },
      { name: 'keywords', content: 'home, astra-engineering, gallery, welcome, početna, galerija, dobrodošli, astra inženjering' },
      { property: 'og:title', content: 'astra inženjering' },
      { property: 'og:description', content: 'Welcome to astra inženjering - Explore our gallery and discover more about us!' },
    ],
    link: [
      { rel: 'canonical', href: 'https://astra-engineering.vercel.app' } // Update with your actual URL
    ]
  });

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



