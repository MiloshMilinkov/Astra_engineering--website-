<!-- banner.vue -->
<template>
  <div class="banner">
    <div class="banner-content">
      <img src="@/assets/Company/logo.jpeg" alt="Company Logo" class="banner-logo">
    </div>
    <div class="banner-slideshow">
      <img src="@/assets/Gallery/Mesto3/placeholder3.jpeg" alt="Banner Image" class="banner-image">
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
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
  border: 5px solid #FFD700;
}

.banner-slideshow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-image {
  width: auto;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
