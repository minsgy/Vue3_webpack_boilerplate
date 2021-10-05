import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
 history: createWebHistory(),
 // 라우터 변경 시, 스크롤 위치 지정
 scrollBehavior() {
  return { top : 0, behavior: 'smooth'}
 },
 routes: [
  {
   path: '/',
   component: Home
  },
  {
   path: '/about',
   component: About
  }
 ]
})