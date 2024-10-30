

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css';
import { createHead } from '@vueuse/head';

const app = createApp(App)
const head = createHead();

app.use(router)

app.use(head);
app.mount('#app')
