import Vue from 'vue';
import Vuex from 'vuex';
import list from '../data/pf.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list
    },
    mutations: {},
    actions: {},
    modules: {}
});
