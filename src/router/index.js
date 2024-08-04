import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavBarDemo from '../components/NavBarsSideBar.vue'
import Google from '../components/Selector.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/navbardemo/',
      name: 'navbar',
      component: NavBarDemo
    },
    {
      path:'/google/',
      name: 'google',
      component: Google
    },
  ]
})

export default router
