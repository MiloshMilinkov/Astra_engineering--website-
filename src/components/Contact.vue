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


<style scoped>
.contact {
  background-color: #f4f4f9; 
  padding: 6rem 1rem; 
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh ;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vh;
  height: 50%;
}

.info-box {
  background-color: #fff; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  border-radius: 10px;
  padding: 2.5rem; 
  margin: 1rem;
  flex: 1 1 30%;
  text-align: center;
  min-width: 200px;
  transition: transform 0.3s ease, background-color 0.3s ease; 
}

.info-box:hover {
  transform: translateY(-10px);
  background-color: #f0f0f5; 
}

.info-box i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FFD700;
}

h3 {
  color: #FFD700; 
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

p {
  color: #333; 
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.mail {
  color: #2B3A55;
  text-decoration: none;
}

.mail:hover {
  text-decoration: underline;
}
</style>
