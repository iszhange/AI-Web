import { createApp } from 'vue';
import router from './router';
import './utils/axios.js';
import './style.css';
import App from './App.vue';


createApp(App).use(router).mount('#app');
