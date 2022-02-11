import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
      path:'/',
      component: () => import('@/views/Home.vue'),
      meta:{
        title:'发现音乐',
       
      }
  },
  {
      path:'/MyMusic',
      component: () => import('@/views/MyMusic.vue'),
      meta:{
        title:'我的音乐',
       
      }
  },
  {
      path:'/Follow',
      component: () => import('@/views/Follow.vue'),
      meta:{
        title:'关注',
       
      }
  },
  {
      path:'/ShoppingMall',
      component: () => import('@/views/ShoppingMall.vue'),
      meta:{
        title:'商城',
       
      }
  },
  {
      path:'/MusicPeople',
      component: () => import('@/views/MusicPeople.vue'),
      meta:{
        title:'音乐人',
       
      }
  },
  {
      path:'/Download',
      component: () => import('@/views/Download.vue'),
      meta:{
        title:'下载客户端',
       
      }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()

})
export default router