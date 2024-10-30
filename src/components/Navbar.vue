<template>
  <header :class="{ 'scrolled-nav': isScrolled }">
    <nav>
      <!-- Desktop Navigation (visible in large screens) -->
      <ul v-if="!isMobile" class="navigation">
        <li><router-link class="link" :to="{ name: 'home' }">POČETNA</router-link></li>
        <li><router-link class="link" :to="{ name: 'about' }">O NAMA</router-link></li>
        <li><router-link class="link" :to="{ name: 'offers' }">USLUGE</router-link></li>
        <li><router-link class="link" :to="{ name: 'gallery' }">GALERIJA</router-link></li>
        <li><router-link class="link" :to="{ name: 'contact' }">KONTAKT</router-link></li>
      </ul>

      <!-- Mobile Navigation Button (visible in mobile screens) -->
      <div class="icon" v-if="isMobile">
        <button @click="toggleMobileNav" class="menu-button">
          <i class="fas fa-bars"></i>
        </button>
        <transition name="mobile-nav">
          <!-- Mobile Navigation Dropdown -->
          <ul v-if="showMobileNav" class="dropdown-nav">
            <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'home' }">POČETNA</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'gallery' }">GALERIJA</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'about' }">O NAMA</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'contact' }">KONTAKT</router-link></li>
            <li><router-link @click="toggleMobileNav" class="link" :to="{ name: 'offers' }">USLUGE</router-link></li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMobile = ref(window.innerWidth <= 750);
const showMobileNav = ref(false);

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value;
};

const updateViewport = () => {
  isMobile.value = window.innerWidth <= 750;
  if (!isMobile.value) {
    showMobileNav.value = false; // Hide mobile nav when switching to desktop view
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('resize', updateViewport);
  window.addEventListener('scroll', handleScroll);
  updateViewport();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateViewport);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
header {
  background-color: #2B3A55;
  opacity: 0.95;
  width: 100%;
  position: fixed;
  top: 0;
  transition: 0.5s ease all;
  color: #FFD700;
  z-index: 99;
}

nav {
  display: flex;
  justify-content: flex-end; /* Aligns the desktop menu and mobile menu button to the right */
  align-items: center;
  padding: 16px 24px;
  max-width: 1240px;
  height: 35px;
  margin: 0 auto;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation li {
  margin-left: 16px;
}

.link {
  font-size: 15px;
  font-weight: 700;
  color: #FFFFFF;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 4px;
  transition: color 0.3s ease;
}

.link.router-link-exact-active,
.link:hover {
  color: #FFD700;
}

.icon {
  display: flex;
  justify-content: flex-end; /* Keep the fa-bars icon aligned to the right in mobile */
}

.menu-button {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.menu-button:hover {
  color: #FFD700;
}

.dropdown-nav {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #2B3A55;
  list-style: none;
  margin: 0;
  padding: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
}

.dropdown-nav li {
  padding: 8px 16px;
}

.dropdown-nav .link {
  color: #FFFFFF;
  font-size: 18px;
}
.dropdown-nav .link:hover{
  color: #FFD700;
  font-size: 18px;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
}

.mobile-nav-enter-to,
.mobile-nav-leave-from {
  opacity: 1;
}

.scrolled-nav {
  background-color: #1F2A40;
  opacity: 0.9;
}
</style>
