<!-- contact.vue -->
<template>
  <section class="contact">
    <div class="container">
      <div class="info-box">
        <i class="fas fa-phone-alt"></i>
        <h3>Telefon</h3>
        <p>+381 61/2700-613</p>
      </div>
      <div class="info-box">
        <i class="fas fa-envelope"></i>
        <h3>Email</h3>
        <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=goran@astraing.com&su=Subject&body=Body%20text" target="_blank" class="mail">goran@astraing.com</a></p>
      </div>
      <div class="info-box">
        <i class="fas fa-map-marker-alt"></i>
        <h3>Adresa</h3>
        <p>Vojni put 210/II</p>
        <p>Zemun, Beograd</p>
      </div>
    </div>
  </section>
</template>

<script setup>
  // No additional scripts needed
</script>

<style scoped>
.contact {
  background-color: #fff;
  padding: 10rem 1rem;
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  width: 100%;
}

.info-box {
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  flex: 1 1 30%;
  text-align: center;
  min-width: 250px;
}

.info-box i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #2B3A55;
}

h3 {
  color: #2B3A55;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  color: #555;
  font-size: 1rem;
}

</style>
