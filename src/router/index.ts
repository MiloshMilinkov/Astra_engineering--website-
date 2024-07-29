import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [    
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: "POČETNA"
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: "O NAMA"
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: "KONTAKT"
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
