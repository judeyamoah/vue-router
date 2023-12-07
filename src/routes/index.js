import {createRouter, createWebHistory} from 'vue-router';

// import Home from '../views/Home.vue';
// import About from '../views/About.vue';
// import Movies from '../views/Movies.vue';






const routes =[
    {path: '/' , name: 'Home', component: ()=> import('../views/Home.vue')},
    {path: '/about' , name: 'About', component: ()=> import('../views/About.vue')},
    {path: '/movies' , name: 'Movies', component:  ()=> import('../views/Movies.vue')},
    {path: '/movies/:id' , name: 'Movie', component:  ()=> import('../views/MovieDetails.vue'), props:true,},
    {path: '/:pathMatch(.*)*' , name: '404', component:  ()=> import('../views/404.vue'),},
];
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;