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
        </div>
      
        <div class="images-section">
          <img src="@/assets/Gallery/Mesto1/placeholder1.jpeg" alt="Image 1" class="image image1" />
          <img src="@/assets/Gallery/Mesto2/placeholder2.jpeg" alt="Image 2" class="image image2" />
          <img src="@/assets/Gallery/Mesto3/placeholder3.jpeg" alt="Image 3" class="image image3" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 10rem 2rem;
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
}
.description p:nth-child(3){
  font-weight: bold;;
}

.logo {
  display: block;
  max-width: 150px;
  margin: 0 auto 1rem auto;
}

.images-section {
  position: relative;
  flex: 1;
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

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  
  .images-section {
    position: static;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    height: auto;
  }

  .image {
    position: static;
    width: calc(33.333% - 1rem);
    height: auto;
  }
}


.logo {
  width: 150px; 
  height: 150px;
  border-radius: 50%;
  box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.4);
  border: 5px solid #FFD700;
}
</style>
