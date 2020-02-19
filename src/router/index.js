import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
