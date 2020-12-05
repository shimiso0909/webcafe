import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/newscontent.vue'
import Menu from '../views/menucontent.vue'
import Contact from '../views/contactcontent.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/news',
    name:'News',
    component:News

  },
  {
    path:'/menu',
    name:'Menu',
    component:Menu

  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact

  },


]

const router = new VueRouter({
  routes
})

export default router
