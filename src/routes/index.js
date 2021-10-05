import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Docs from './Docs'
import DocsId from './DocsId'
export default createRouter({
 history: createWebHashHistory(),
 routes: [
  {
   path: '/',
   name: 'home',
   component: Home
  },
  {
   path: '/about',
   name: 'about',
   component : About
  },
  {
   path: '/documents',
   component : Docs,
   // children: [
   //  {
   //   // 상위 컴포넌트에서 Router-view를 선언해주어야합니다.
   //   path: ':id',
   //   component: DocsId
   //  }
   // ]
  },
  {
   // 상위 컴포넌트에서 Router-view를 선언해주어야합니다.
   path: '/documents/:id',
   name: 'docsId',
   component: DocsId
  },
  {
   // 나머지 모든 경로 처리
   path: '/:notFound(.*)',
   component: NotFound
  }
 ]
})