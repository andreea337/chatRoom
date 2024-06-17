// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/tailwind.css";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-amber/theme.css";


const app = createApp(App)
// 註冊
app.use(router); 
app.use(PrimeVue);
app.mount('#app')
