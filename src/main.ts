import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { createHead } from '@vueuse/head';

// Create the app using ViteSSG
export const createApp = ViteSSG(
  App,
  { routes: router.options.routes }, // Pass the router's routes
  (ctx) => {
    // Install plugins or perform other app-level setups here
    const head = createHead();
    ctx.app.use(head);
  }
);