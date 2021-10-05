import router from '~/routes'
export default { 
 namespaced: true,
 state() {
  return { 
   isLoggedIn: false,
  }
 },
 mutations: {
  updateLoggedIn(state, payload) {
   state.isLoggedIn = payload
  }
 },
 actions: {
  initialize({ commit }) {
   if(localStorage.getItem('isLoggedIn')) {
    commit('updateLoggedIn', true)
   }
  },

  // payload 사용자로부터 받는
  logIn({ commit }, payload){
   const { id, pw } = payload
   if ( id && pw ){
    localStorage.setItem('isLoggedIn', true)
    commit('updateLoggedIn', true)
    const {redirect} = router.currentRoute.value.query
    if(redirect) {
     router.push(redirect)
    } else {
     router.push('/')
    }
   }
  },
  logOut({ commit }){
   localStorage.removeItem('isLoggedIn')
   commit('updateLoggedIn', false)
   // 로그아웃을 했을 때, 로그인이 만약 필요한 페이지라면? 로그인 필요없는곳으로 push
   const {requiresAuth} = router.currentRoute.value.meta
   if (requiresAuth) {
    router.push('/')
   }
  }
 }
}