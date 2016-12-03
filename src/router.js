import Vue from 'vue'
import Router from 'vue-router'

import AV from 'leancloud-storage'

import Home from './views/Home'

const AdminHome = r => require.ensure([], () => r(require('./views/admin/Home.vue')), 'admin')
const AdminSign = r => require.ensure([], () => r(require('./views/admin/Sign.vue')), 'admin')
const AdminEditArticle = r => require.ensure([], () => r(require('./views/admin/EditArticle.vue')), 'admin')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/sign',
    component: AdminSign
  }, {
    path: '/admin',
    component: AdminHome,
    meta: { requiresAuth: true },
    children: [{
      path: 'post/new',
      component: AdminEditArticle
    }]
  }
]

const router = new Router({
  mode: 'history',
  routes
})

// Redirect to login page if not logged & auth required,
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!AV.User.current()) {
      next({
        path: '/sign',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
