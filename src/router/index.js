import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Produto from "../views/Produto";
import Login from "../views/Login";
import Cadastro from "../views/Cadastro";
import Usuario from "../views/Usuario";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  },

  {
    path: "/login",
    name: "login",
    component: Login
  },

  {
    path: "/usuario",
    name: "usuario",
    component: Usuario
  },

  {
    path: "/cadastro",
    name: "cadastro",
    component: Cadastro
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
