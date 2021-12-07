import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/marca",
    name: "Marca",
    component: () => import("../views/Marca.vue")
  },
  {
    path: "/produto",
    name: "Produto",
    component: () => import("../views/Produto.vue")
  },
  {
    path: "/venda",
    name: "Venda",
    component: () => import("../views/Venda.vue")
  },
  {
    path: "/usuario",
    name: "Usuario",
    component: () => import("../views/Usuario.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
