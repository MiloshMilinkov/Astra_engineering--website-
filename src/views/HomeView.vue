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
    title: 'ASTRA INŽENJERING | Građevinske Usluge u Srbiji',
    meta: [
      { name: 'description', content: 'ASTRA INŽENJERING - Profesionalna građevinska firma u Srbiji koja pruža kvalitetne građevinske usluge. Kontaktirajte nas za više informacija.' },
      { name: 'keywords', content: 'Astra Inženjering, građevinska firma, građevinske usluge, gradjevinski radovi, Srbija, građevina' },
      { property: 'og:title', content: 'ASTRA INŽENJERING - Građevinska Firma u Srbiji' },
      { property: 'og:description', content: 'Kvalitetne građevinske usluge od profesionalne firme ASTRA INŽENJERING.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://astra-engineering.vercel.app' },
    ],
    link: [
      { rel: 'canonical', href: 'https://astra-engineering.vercel.app' }
    ]
  });

  const handleScroll = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      const rect = galleryElement.getBoundingClientRect();
      const triggerTrashold = 300;
      if (rect.top < window.innerHeight - triggerTrashold && rect.bottom >= triggerTrashold) {
        router.push('/galerija');
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



