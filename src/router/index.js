import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'check vin',
    // component: CheckVinView,
    component: () => import(/* webpackChunkName: "about" */ '@/components/view/CheckVINView.vue')
  },
  {
    path: '/registration',
    name: 'information',
    //component: RegistrationView
    //lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/components/view/RegistrationView.vue')
  },
  {
    path: '/information',
    name: 'information',
    //component: InformationView
    //lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/view/InformationView.vue')
  },
  {
    path: '/support',
    name: 'support',
    //component: MainView
    //lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/view/SupportView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'linkActivateClass'
})

export default router
