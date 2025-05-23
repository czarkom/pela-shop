import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Configurator from "../views/Configurator.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/configurator', name: 'Configurator', component: Configurator },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router