<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name: 'home'}">POČETNA</router-link></li>
        <li><router-link class="link" :to="{name: 'about'}">O NAMA</router-link></li>
        <li><router-link class="link" :to="{name: 'contact'}">KONTAKT</router-link></li>
      </ul>
      <div class="icon" v-show="mobile">
        <button @click="toggleMobileNav" class="menu-button">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <transition name="mobile-nav" >
        <ul v-if="mobileNav" class="dropdown-nav">
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'home'}">POČETNA</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'about'}">O NAMA</router-link></li>
          <li><router-link @click="toggleMobileNav" class="link" :to="{name: 'contact'}">KONTAKT</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>



<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const scrollPosition = ref(false);
const mobile = ref(window.innerWidth <= 750);
const mobileNav = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMobileNav = () => {
  mobileNav.value = !mobileNav.value;
};

const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
  } else {
    mobile.value = false;
    mobileNav.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', checkScreen);
  checkScreen();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreen);
});

watch(windowWidth, (newWidth) => {
  if (newWidth > 750) {
    mobileNav.value = false;
  }
});
</script>

<style scoped>
header {
  background-color: #2B3A55;
  opacity: 0.95;
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: #FFD700;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 24px 0;
  transition: .5s ease all; 
  top: 0;
  margin: 0 auto;
  height: 25px;
}

@media(min-width: 1240px){
  nav {
    max-width: 1240px;
  }
}

nav ul, .link {
  font-weight: 500;
  color: #FFFFFF;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 15px;
  transition: .8s ease all;
  padding-bottom: 4px;
  font-weight:700;
}

.link:hover {
  color: #FFD700;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  cursor: pointer;
}

.icon .menu-button {
  background: none;
  border: none;
  color: #FFFFFF;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  transition: .8s ease all;
}
.icon .menu-button:hover {
  color: #FFD700;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #2B3A55;
  top: 0;
  left: 0;
  padding-top: 60px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transition: all 0.8s ease;
  margin-top: 0;;
}

.dropdown-nav li {
  margin-left: 0;
  padding: 16px;
}

.dropdown-nav li .link {
  color: #FFD700;
  font-size: 18px;
}



.mobile-nav-enter-active, .mobile-nav-leave-active{
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-100%);
}
.mobile-nav-enter-to{
  transform: translateX(0);
}

</style>
