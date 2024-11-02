import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import Gallery from '@/components/Gallery.vue';
import Offers from '@/views/Offers.vue';

const routes = [    
  {
    path: '/',
    name: 'početna',
    component: HomeView,
    meta: {
      title: "ASTRA INŽENJERING"
    }
  },
  {
    path: '/onama',
    name: 'onama',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "O NAMA"
    }
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: ContactView,
    meta: {
      title: "KONTAKT"
    }
  },
  {
    path: '/galerija',
    name: 'galerija',
    component: Gallery,
    meta: {
      title: "GALERIJA"
    }
  }
  ,
  {
    path: '/usluge',
    name: 'usluge',
    component: Offers,
    meta: {
      title: "USLUGE"
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) =>{
  document.title= `${to.meta.title}`;
  next();
});
export default router
