<template>
  <section class="about">
    <div class="container">
      <div class="content">
        <div class="description-box">
          <div class="div-logo">
            <img src="@/assets/Company/logo2.png" alt="Company Logo" class="logo" />
          </div>

          <div class="description">
            <p>Preduzeće ASTRA-inženjering se bavi izvođenjem građevinskih i građevinsko-zanatskih radova, kako na izgradnji novih, tako i na rekonstrukciji i adaptaciji postojećih objekata. Preduzeće je osnovano 1992. godine prerastanjem postojeće građevinsko-zanatske radnje (osnovana 1983. godine) u Preduzeće. Ključni inženjeri i tehničari su i pre osnivanja Preduzeća radili na poslovima u okviru zanatske radnje ili drugih preduzeća kao podizvođači.</p>
            <p>Mi smo vodeća građevinska firma sa čvrstom reputacijom za pružanje izuzetnog kvaliteta i usluge. Naš iskusni tim profesionalaca posvećen je obezbeđivanju najviših standarda majstorski rad, bezbednosti i pouzdanosti. Od stambenih do komercijalnih projekata, obrađujemo svaki detalj sa preciznošću i pažnjom.</p>
            <p> Naš cilj je da prevaziđemo očekivanja naših klijenata pružanjem inovativnih rešenja i održavanjem najvišeg nivoa zadovoljstva korisnika.</p>
          </div>
          <div>
            <i id="icon1" class="fas fa-file-word"></i> 
            <a :href="documentFilePath" download>
              <span >{{ documentFileName}}</span>
              <i id="icon2" class="fas fa-download"></i> 
            </a>
          </div>

        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
const documentFilePath = '/Files/Referenc lista, Astra Inženjering.doc';
const documentFileName = 'LISTA REFERENCI, Astra Inženjering.'
import { useHead } from '@vueuse/head';
useHead({
    title: 'About- astra-engineering',
    meta: [
      { name: 'description', content: 'About astra-engineering.' },
      { name: 'keywords', content: 'about, astra-engineering, o nama, galerija, astra inženjering' },
      { property: 'og:title', content: 'About' },
      { property: 'og:description', content: 'About astra-engineering.' },
    ],
    link: [
      { rel: 'canonical', href: 'https://astra-engineering.vercel.app/about' } // Update with your actual URL
    ]
  });


</script>

<style scoped>
.about {
  padding: 8rem 2rem;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
}

.description-box {
  flex: 1;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.226);
}

.description {
  font-size: 1.2rem;
  color: #555;
  text-align: left;
  text-align: justify;
  text-justify: inter-word;
}

.description p:nth-child(3) {
  font-weight: bold;
}

.div-logo img {
  display: block;
  max-width: 175px;
  margin: 0 auto 2rem auto;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.4);
  border: 5px solid #FFD700;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .description {
    text-align: center;
  }
}

a,span {
  text-decoration: none;
  color: #2B3A55;
  font-weight: 700;
}

#icon1 {
  font-size: 40px;
  margin-right: 15px;
  color: #2B3A55;
}

a:hover,span:hover, #icon2:hover{
  color: #FFD700;
}
#icon2 {
  font-size: 20px;
  margin-left: 5px;
  color: #2B3A55;
}
</style>
