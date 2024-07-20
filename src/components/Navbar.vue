<template>
  <nav class="navbar">
  <div class="logo-links">
    <div class="navbar-brand">
      <img src=""  alt="Logo" class="navbar-logo" />
    </div>
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
  background-color: #fff;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.logo-links{
  display: flex;
  align-items: center;
}
.navbar-logo {
  height: 40px;
}
.navbar-links {
  display: flex;
  gap: 1rem;
}
.navbar-item {
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: bold;
}
.navbar-item:hover {
  color: #007BFF;
}
.navbar-social {
  display: flex;
  gap: 1rem;
}
.navbar-social .navbar-item {
  font-size: 1.5rem;
  color: #333;
}
.navbar-social .navbar-item:hover {
  color: #007BFF;
}
</style>
