<!-- banner.vue -->
<template>
  <div class="banner">
    <div class="banner-content">
      <img src="@/assets/Company/logo.jpeg" alt="Company Logo" class="banner-logo" />
    </div>
    <div class="banner-slideshow">
      <Swiper
        :modules="[Autoplay, EffectFade]"
        :autoplay="{ delay: 5000 }"
        :loop="true"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :speed="1000"
        @swiper="onSwiperInit"
        @resize="onSwiperResize"
        class="swiper"
      >
        <SwiperSlide v-for="(photo, index) in photos" :key="index">
          <img :src="`src/assets/SlideShow/SlideShow/${photo}`" alt="Slideshow Image" class="swiper-slide-img" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="scroll-pointer">
      <p>GALERIJA</p>
      <span class="fas fa-arrow-down arrow-icon"></span>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { ref } from 'vue';

const photos = ["placeholder3.jpeg", "placeholder2.jpeg", "placeholder1.jpeg"];
const swiperRef = ref(null);

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper;
};

const onSwiperResize = () => {
  swiperRef.value?.update();
};
</script>

<style scoped>
.banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.banner-content {
  position: absolute;
  z-index: 2;
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
}

.banner-logo {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 5px solid #ffd700;
}

.banner-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scroll-pointer {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  width: 400px;
  height: 200px;
  text-shadow: 5px 5px 4px #2b3a55;
}

.arrow-icon {
  font-size: 5rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.scroll-pointer p {
  color: #ffd700;
  margin: 0;
  font-size: 2rem;
  white-space: nowrap;
}
</style>
