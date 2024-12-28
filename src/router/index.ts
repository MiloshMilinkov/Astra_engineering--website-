import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import Gallery from '@/components/Gallery.vue';
import Offers from '@/views/Offers.vue';

const isServer = typeof window === 'undefined'; // Check if running in server-side context

const routes = [
  {
    path: '/',
    name: 'početna',
    component: HomeView,
    meta: {
      title: "ASTRA INŽENJERING",
      description: "Dobrodošli na zvaničnu stranicu ASTRA INŽENJERING-a. Pružamo profesionalne građevinske usluge najvišeg kvaliteta.",
    }
  },
  {
    path: '/onama',
    name: 'onama',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "O NAMA",
      description: "Saznajte više o ASTRA INŽENJERING-u, našoj istoriji, vrednostima i stručnom timu."
    }
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: ContactView,
    meta: {
      title: "KONTAKT",
      description: "Kontaktirajte nas za sva pitanja, ponude i informacije. Vaša komunikacija je naša prioritet."
    }
  },
  {
    path: '/galerija',
    name: 'galerija',
    component: Gallery,
    meta: {
      title: "GALERIJA",
      description: "Pogledajte našu galeriju projekata i inspirativnih radova. Kvalitet u svakom detalju."
    }
  },
  {
    path: '/usluge',
    name: 'usluge',
    component: Offers,
    meta: {
      title: "USLUGE",
      description: "Otkrijte široku ponudu građevinskih usluga koje pruža ASTRA INŽENJERING."
    }
  }
];

const router = createRouter({
  // Use memory history during server-side rendering
  history: isServer ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Set document.title and meta description only in the browser environment
if (!isServer) {
  router.beforeEach((to, from, next) => {
    // Set the page title
    document.title = `${to.meta.title || 'Default Title'}`;

    // Set the meta description
    const metaDescription = document.querySelector("meta[name='description']");
    const descriptionContent = to.meta.description as string || 'Default Description'; // Type assertion

    if (metaDescription) {
      metaDescription.setAttribute("content", descriptionContent);
    } else {
      const descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      descriptionTag.setAttribute('content', descriptionContent);
      document.head.appendChild(descriptionTag);
    }

    next();
  });
}

export default router;
