import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index.vue'),
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
    component: () => import( '../views/voice_desktop/index.vue'),
    redirect: '/voice_desktop/f613',
    children: [
      {
        path:'f613',
        name: 'f613',
        component: () => import( '../views/voice_desktop/f613.vue')
      },
      {
        path:'lightPlace',
        name: 'LightPlace',
        component: () => import( '../views/voice_desktop/light_place.vue')
      },
      {
        path:'littleBel',
        name: 'LittleBel',
        component: () => import( '../views/voice_desktop/little_bel.vue')
      }
    ]
  },
  
  // {
  //   path: '/about/test1',
  //   name: 'test1',
  //   component: Test1,
  // },
  // {
  //   path: '/about/test2',
  //   name: 'test2',
  //   component: Test2,
  // },
  {
    path:'/voice_desktop/:id',
    name: 'VoiceDesktop',
    // component: VoiceDesktop,
    component: () => import(/* webpackChunkName: "voice_desktop" */ '../views/voice_desktop.vue'),
  },
  {
    path:'/voice_ambient/:id',
    name: 'VoiceAmbient',
    // component: VoiceAmbient,
    component: () => import(/* webpackChunkName: "voice_ambient" */ '../views/voice_ambient.vue'),
  },
  {
    path:'/home_theater/:id',
    name: 'HomeTheater',
    // component: VoiceAmbient,
    component: () => import(/* webpackChunkName: "home_theater" */ '../views/home_theater.vue'),
  },
  {
    path:'/home_recreation/:id',
    name: 'HomeRecreation',
    // component: VoiceAmbient,
    component: () => import(/* webpackChunkName: "home_recreation" */ '../views/home_recreation.vue'),
  },
  {
    path:'/customized/:id',
    name: 'MajorCustomized',
    // component: VoiceAmbient,
    component: () => import(/* webpackChunkName: "major_customized" */ '../views/major_customized.vue'),
  },
  {
    path:'/major/:id',
    name: 'MajorBusiness',
    // component: VoiceAmbient,
    component: () => import(/* webpackChunkName: "major_business" */ '../views/major_business.vue'),
  },
  {
    path:'/brand/:id',
    name: 'Brand',
    // component: VoiceAmbient,
    component: () => import(/* webpackChunkName: "brand" */ '../views/brand.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
