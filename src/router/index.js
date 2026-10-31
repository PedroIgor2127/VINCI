
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Veiculos from '../views/Veiculos.vue'
import Servicos from '../views/Servicos.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sobre',
    component: Sobre
  },
  {
    path: '/veiculos',
    component: Veiculos
  },
  {
    path: '/servicos',
    component: Servicos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
