import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            name: 'Main',
            path: '/', 
            component: () => import('./views/MainPage.vue'), 
        },
        {
            name: 'Movie', 
            path: '/movie/:id', 
            component: () => import('./views/MoviePage.vue')
        }    
    ]
})

createApp(App).use(router).mount('#app');
