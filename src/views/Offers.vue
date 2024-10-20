<template>
    <div class="offers-container">
      <h1>NAŠE USLUGE</h1>
      <div class="offers-grid">
        <div class="offer-card" v-for="(offer, index) in offers" :key="index">
          <div class="offer-image">
            <img :src="offer.image" alt="Offer Image" />
          </div>
          <div class="offer-details">
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.description }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  const offers = [
    {
      title: "Rekonstrukcija objekata",
      description: "Obnavljanje i modernizacija postojećih objekata, sa posebnim akcentom na poboljšanje funkcionalnosti i estetike.",
      image: "/Images/Gallery/PROJEKAT - RESTORAN UPRAVA 1927/1_KOLAZ.jpg", 
    },
    {
      title: "Izgradnja novih objekata",
      description: "Kompleksni građevinski projekti za stambene, poslovne i industrijske objekte, sa detaljnim planiranjem i izvođenjem svih faza radova.",
      image: "/Images/Gallery/PROJEKAT - MODERNA KUĆA/1_kolaz.jpg", 
    },
    {
      title: "Grubi građevinski radovi",
      description: "Temeljni i osnovni radovi potrebni za postavljanje strukture objekta, uključujući pripremu, temeljenje i zidanje.",
      image: "/Images/Gallery/PROJEKAT - TOZA/11_temelj.jpg", 
    },
    {
      title: "Ornament gipsarski radovi",
      description: "Kreiranje dekorativnih gipsanih elemenata za unutrašnje i spoljašnje prostore.",
      image: "https://via.placeholder.com/300x200", 
    },
    {
      title: "Elektro radovi",
      description: "Instalacija električnih sistema i održavanje elektroinstalacija.",
      image: "https://via.placeholder.com/300x200", 
    },
    {
      title: "Spušten plafon, zidarski radovi",
      description: "Montaža spuštenih plafona i profesionalni zidarski radovi.",
      image: "https://via.placeholder.com/300x200", 
    },
    {
      title: "Molersko-farbarski radovi",
      description: "Krečenje, farbanje i završni radovi na uređenju enterijera i eksterijera.",
      image: "https://via.placeholder.com/300x200", 
    },
    {
      title: "Limarski radovi",
      description: "Izrada i montaža limenih elemenata, uključujući oluke, opšave i druge krovne elemente.",
      image: "https://via.placeholder.com/300x200", 
    },
    {
      title: "Krovopokrivački radovi",
      description: "Postavljanje novih krovova i obnova postojećih krovnih konstrukcija.",
      image: "/Images/Gallery/PROJEKAT - TOZA/DSC_0736.jpg", 
    },
    {
      title: "Hidroizolaterski radovi",
      description: "Primena visokokvalitetnih materijala za zaštitu objekata od vlage i vode.",
      image: "https://via.placeholder.com/300x200", 
    },
    {
      title: "Keramičarski radovi",
      description: "Postavljanje i oblaganje pločicama, sa posebnom pažnjom na preciznost i estetiku.",
      image: "/Images/Gallery/PROJEKAT - VAVIJANA/13_plocice.jpg", 
    },
    {
      title: "Tesarski radovi",
      description: "Izvođenje tesarskih radova, uključujući izradu i postavljanje drvenih konstrukcija.",
      image: "https://via.placeholder.com/300x200", 
    }
  ];
</script>
  
  <style scoped>
  .offers-container {
    padding-top: 5rem;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .offers-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  
  .offer-card {
    flex: 1 1 calc(20% - 20px);
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  
  .offer-image img {
    width: fit-content;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  
  .offer-details h3 {
    margin-top: 0;
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .offer-details p {
    margin-bottom: 0;
    font-size: 0.95em;
    color: #555;
  }
  
  /* Responsive styling */
  @media (max-width: 768px) {
    .offers-grid {
      flex-direction: column;
    }
  
    .offer-card {
      flex: 1 1 100%;
    }
  
    .offer-image img {
      width: 100%;
      height: auto;
    }
  }
  </style>
  