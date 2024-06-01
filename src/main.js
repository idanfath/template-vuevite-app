import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import myFunct from './myFunct'
import { MotionPlugin } from '@vueuse/motion';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'animate.css'
import 'swiper/swiper-bundle.css';
import PrimeVue from 'primevue/config';
import Lara from 'primevue/themes/lara';


createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Lara,
            options: {
                darkModeSelector: '.dark-mode',
            }
        }
    })
    .use(myFunct)
    .use(autoAnimatePlugin)
    .use(MotionPlugin)
    .use(router)
    .mount('#app')
