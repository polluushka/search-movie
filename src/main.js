import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            name: 'Main',
            path: '/search-movie', 
            component: () => import('./views/MainPage.vue'), 
        },
        {
            name: 'Movie', 
            path: '/search-movie/movie/:id', 
            component: () => import('./views/MoviePage.vue')
        },
        {
            name: 'About', 
            path: '/search-movie/about', 
            component: () => import('./views/AboutPage.vue')
        },
        {
            name: 'Best', 
            path: '/search-movie/best', 
            component: () => import('./views/BestPage.vue')
        },

        {
            name: 'Series', 
            path: '/search-movie/series', 
            component: () => import('./views/SeriesPage.vue')
        },
    ]
})

createApp(App).use(router).mount('#app');
