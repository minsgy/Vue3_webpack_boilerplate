import { createStore } from 'vuex'

export default createStore({
 state() {
   return {
    msg : 'hello Vue',
    count: 1,
   }
 },
 getters: {
   reversedMsg(state) {
     return state.msg.split('').reverse().join('')
   }
 },
// 데이터를 수정할 수 있는 권한. 그외는 모두 action을 활용
 mutations : {
  //  state 함수를 가져오기
   increaseCount(state) {
     state.count += 1
   },
   updateMsg(state, newMsg){
     state.msg = newMsg
   }
 },
 actions: {
   // context => state, getters, commit(mutations), dispatch
   async fetchTodo({ commit }){
     const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res=>res.json())
      commit('updateMsg', todo.title)
   }
 }
})