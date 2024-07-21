<template>
  <nav class="navbar">
    <div class="logo-links">
      <div class="navbar-links">
        <a class="navbar-item" href="/">POČETNA</a>
        <a class="navbar-item" href="/about">O NAMA</a>
        <a class="navbar-item" href="/contact">KONTAKT</a>
      </div>
    </div>
    <div class="navbar-social">
      <a class="navbar-item" href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
      <a class="navbar-item" href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      <a class="navbar-item" href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2B3A55;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.logo-links {
  display: flex;
  align-items: center;
}

.navbar-links {
  display: flex;
  gap: 1rem;
}
.navbar-item {
  color: #FFFFFF;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
}
.navbar-item:hover {
  color: #FFD700;
}
.navbar-social {
  display: flex;
  gap: 1rem;
}
.navbar-social .navbar-item {
  font-size: 1.5rem;
  color: #FFFFFF;
}
.navbar-social .navbar-item:hover {
  color: #FFD700;
}
</style>
