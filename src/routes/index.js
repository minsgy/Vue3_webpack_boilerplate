import { createRouter, createWebHistory } from 'vue-router'
import About from './About'
export default createRouter({
 // HTML5 Mode로 처리 
 // => Webpack 처리 필요 (publicPath, devServer : historyAPiFallBack 처리)
 history : createWebHistory(),
 routes: [
  {
   path: '/about',
   component: About
  }
 ]
})