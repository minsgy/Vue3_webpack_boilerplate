import router from './index'
import store from '~/store'

router.beforeEach((to) => {
 if (to.meta.requireAuth && !store.state.user.isLoggedIn){
  // 로그인 안했으니 다시 메인으로 보내기
  return {
   path: '/login',
   query: { redirect : to.fullPath } // 이전 페이지로 Redirect
  }
 }
})