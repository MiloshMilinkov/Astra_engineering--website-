<template>
    <section class="about">
      <div class="container">
          <div class="info-section">
          <h3>Kontakt Informacije</h3>
          <p>Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=goran@astraing.com&su=Subject&body=Body%20text" target="_blank" class="mail">goran@astraing.com</a></p>
          <p>Telefon: +381 61/2700-613</p>
          <p>Adresa:  Vojni put 210/II, Zemun, Beograd</p>
        </div>
      </div>
  </section>
</template>
  
 
  
  <style scoped>
  .about {
    padding: 4rem 2rem;
    background-color: #ffffff;
    text-align: center;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2, h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2B3A55;
  }
  
  .description {
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #555;
    text-align: left;
  }
  
  .info-section {
    margin-bottom: 2rem;
  }
  
  .images-section {
    position: relative;
    height: 400px;
  }
  
  .image {
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
  
  .image1 {
    top: 0;
    left: 0;
    width: 60%;
    height: 60%;
  }
  
  .image2 {
    top: 20%;
    left: 45%;
    width: 60%;
    height: 60%;
  }
  
  .image3 {
    top: 45%;
    left: 15%;
    width: 60%;
    height: 60%;
  }
  
  .mail{
    text-decoration: none;
  }
  </style>
  