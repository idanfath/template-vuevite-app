import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import myFunct from './myFunct'
import { MotionPlugin } from '@vueuse/motion';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'animate.css'


createApp(App).use(myFunct).use(autoAnimatePlugin).use(MotionPlugin).use(router).mount('#app')
