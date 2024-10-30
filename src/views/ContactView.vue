<template>
    <div>
        <Contact/>
    </div>
</template>

<script setup>
import Contact from '@/components/Contact.vue';
import { useHead } from '@vueuse/head';
useHead({
    title: 'Contact - astra-engineering',
    meta: [
      { name: 'description', content: 'Contact astra-engineering.' },
      { name: 'keywords', content: 'contact, astra-engineering, kontakt, astra inženjering kontakt' },
      { property: 'og:title', content: 'astra inženjering' },
      { property: 'og:description', content: 'Contact astra-engineering.' },
    ],
    link: [
      { rel: 'canonical', href: 'https://astra-engineering.vercel.app/about' } // Update with your actual URL
    ]
  });
</script>

<style lang="scss" scoped>

</style>