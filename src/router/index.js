import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path:'/voice_desktop',
    name: 'VoiceDesktop',
    component: () => import( '../views/home.vue'),
    redirect: '/voice_desktop/F-613',
    children: [{
      path:':id',
      name: 'voice_desktop',
      component: () => import(/* webpackChunkName: "voice_desktop" */ '../views/voice_desktop.vue'),
    }]
  },
  {
    path:'/voice_ambient',
    name: 'VoiceAmbient',
    component: () => import('../views/home.vue'),
    redirect: '/voice_ambient/Bel',
    children: [{
      path:':id',
      name: 'voice_ambient',
      component: () => import(/* webpackChunkName: "voice_ambient" */ '../views/voice_ambient.vue'),
    }]
  },
  {
    path:'/home_theater',
    name: 'HomeTheater',
    component: () => import('../views/home.vue'),
    redirect: '/home_theater/F-806',
    children: [{
      path:':id',
      name: 'home_theater',
      component: () => import(/* webpackChunkName: "home_theater" */ '../views/home_theater.vue'),
    }]
  },
  {
    path:'/home_recreation',
    name: 'HomeRecreation',
    component: () => import('../views/home.vue'),
    redirect: '/home_recreation/AR1304',
    children: [{
      path:':id',
      name: 'home_recreation',
      component: () => import(/* webpackChunkName: "home_recreation" */ '../views/home_recreation.vue'),
    }]
  },
  {
    path:'/customized',
    name: 'MajorCustomized',
    component: () => import('../views/home.vue'),
    redirect: '/customized/F612-T4',
    children: [{
      path:':id',
      name: 'customized',
      component: () => import(/* webpackChunkName: "customized" */ '../views/major_customized.vue'),
    }]
  },
  {
    path:'/major',
    name: 'MajorBusiness',
    component: () => import('../views/home.vue'),
    redirect: '/major/major1',
    children: [{
      path:':id',
      name: 'major',
      component: () => import(/* webpackChunkName: "customized" */ '../views/major_business.vue'),
    }]
  },
  {
    path:'/brand',
    name: 'Brand',
    component: () => import('../views/home.vue'),
    redirect: '/brand/brand1',
    children: [{
      path:':id',
      name: 'brand',
      component: () => import(/* webpackChunkName: "Brand" */ '../views/brand.vue'),
    }]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
