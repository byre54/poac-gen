import Home from './views/Home.vue'
import About from './views/About.vue'
import Promo from './views/Promo.vue'
import Award from './views/Award.vue'
// import Testing from './views/Testing.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Promo, meta: { title: 'Home' } },
  { path: '/about', component: About },
  { path: '/:path(.*)', component: NotFound },
  { path: '/promo', component: Promo},
  { path: '/award', component: Award},
  // { path: '/testing', component: Testing},
]
