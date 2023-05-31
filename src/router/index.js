import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CatalogPage from '../views/CatalogPage.vue'
import About from '../views/About.vue'
import Delivery from '../views/Delivery.vue'
import Contacts from '../views/Contacts.vue'
import Category from '../views/Category.vue'
import Product from '../views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogPage
  },
  {
    path: '/catalog/:categoryId',
    name: 'category',
    component: Category
  },
  {
    path: '/catalog/:categoryId/:productId',
    name: 'product',
    component: Product
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
