import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Navigation from '/src/components/Navigation.vue'
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home,

  },
  {
    path:'/sidebar',
    name:'sidebar',
    component:Navigation
  }
]
const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
