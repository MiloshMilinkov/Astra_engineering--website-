<template>
  <section class="about">
    <div class="container">
      <h2>O Nama</h2>
      
      <!-- Description Section -->
      <div class="description">
        <p>Preduzeće ASTRA-inženjering se bavi izvođenjem građevinskih i građevinsko-zanatskih radova, kako na izgradnji novih, tako i na rekonstrukciji i adaptaciji postojećih objekata. Preduzeće je osnovano 1992. godine prerastanjem postojeće građevinsko-zanatske radnje (osnovana 1983. godine) u Preduzeće. Ključni inženjeri i tehničari su i pre osnivanja Preduzeća radili na poslovima u okviru zanatske radnje ili drugih preduzeća kao podizvođači.</p>
        <p>Mi smo vodeća građevinska firma sa čvrstom reputacijom za pružanje izuzetnog kvaliteta i usluge. Naš iskusni tim profesionalaca posvećen je obezbeđivanju najviših standarda majstorski rad, bezbednosti i pouzdanosti. Od stambenih do komercijalnih projekata, obrađujemo svaki detalj sa preciznošću i pažnjom. Naš cilj je da prevaziđemo očekivanja naših klijenata pružanjem inovativnih rešenja i održavanjem najvišeg nivoa zadovoljstva korisnika.</p>
      </div>
      
      <!-- Info Section -->
      <div class="info-section">
        <h3>Kontakt Informacije</h3>
        <p>Email: ?????????????????????</p>
        <p>Telefon: +381 63/214-136, +381 63/221-752</p>
        <p>Adresa: Vojni put 210/II, Zemun, Beograd</p>
      </div>
      
      <!-- Images Section -->
      <div class="images-section">
        <!-- <img src="@/assets/image1.jpg" alt="Image 1" class="image image1" />
        <img src="@/assets/image2.jpg" alt="Image 2" class="image image2" />
        <img src="@/assets/image3.jpg" alt="Image 3" class="image image3" /> -->
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 4rem 2rem;
  background-color: #faf4f4;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2, h3 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
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
  left: 40%;
  width: 60%;
  height: 60%;
}

.image3 {
  top: 40%;
  left: 20%;
  width: 60%;
  height: 60%;
}
</style>
