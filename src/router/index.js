import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '@/components/navigation/NavigationComp.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Navigation,
    children:[
      {
        path: "paginainicial",
        name: "pagina inicial",
        component: () => import("@/components/HomePage.vue"),
        meta: {
          nome: "Página Incial",
          visibleRoute: true,
        },
      },
      {
        path: "sobre",
        name: "sobre",
        component: () => import("@/components/AboutComp.vue"),
        meta: {
          nome: "Sobre",
          visibleRoute: true,
        },
      },
    ],
    meta:{
      nome:"Home",
      visibleRoute: false,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
