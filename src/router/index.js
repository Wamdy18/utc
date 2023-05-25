import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import Catalog from '../views/Catalog.vue'
import About from '../views/About.vue'
import Delivery from '../views/Delivery.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
