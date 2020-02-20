import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Link from '../views/link.vue';
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
    },
    {
        path: '/link',
        name: 'link',
        component: Link
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
