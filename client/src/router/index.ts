// Vue Router 的實例必須有 createRouter 和 createWebHistory 這兩個函數。
// 有了 Vue Router 的實例就可以使用 <router-view> 標籤來渲染匹配到的路由元件內容。
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const router = createRouter({
// import.meta.env.BASE_URL 用於指定應用程序的根路徑。如果應用程序可能在不同的 URL 路徑下運行（如子目
// 錄或子網站）就建議使用這個參數來設置。若無任何子目錄則可寫 history: createWebHistory()
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
