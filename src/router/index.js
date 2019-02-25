import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home.vue';
import Pendana from '@/components/views/Pendana.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Pendana',
      name: 'Pendana',
      component: Pendana,
    }
  ]
})
