import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('views/home/Home.vue')
const Cart = () =>import('views/cart/Cart.vue')
const Category = () =>import('views/category/Category.vue')
const My = () =>import('views/my/My.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redeirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/my',
    component: My
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router