import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "DataTemplate" */ './components/data-template/DataTemplate.vue')
    },
    {
      path: '/clientes',
      name: 'clients',
      component: () => import(/* webpackChunkName: "DataTemplate" */ './components/data-template/DataTemplate.vue')
    },
    {
      path: '/usuarios/:eq_id',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ './components/equipment/Equipment.vue')
    },
    {
      path: '/getClientes/:eq_id/:user_id',
      name: 'getClients',
      component: () => import(/* webpackChunkName: "getClients" */ './components/clients/Clients.vue')
    },
    {
      path: '*',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
