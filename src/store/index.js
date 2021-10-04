import { reactive } from 'vue'
export const state = reactive({
 msg: 'Hello Vue ?!',
 count: 1
})
// 변환 된 데이터를 사용하기 위한
export const getters = {
 reversedMsg() {
  return state.msg.split('').reverse().join('')
 }
}
// 데이터를 변환하기 위한
export const mutations = {
 increaseCount(){
  state.count += 1
 },
 decreaseCount() {
  state.count -= 1
 },
 updateMsg(newMsg){
  state.msg = newMsg
 }
}

export const actions = {
 async fetchTodo() {
  const todo = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
   console.log(todo)
   // 이러한 데이터 수정은 관리가 어려워집니다.
   // state.msg = todo.title
   mutations.updateMsg(todo.title)
 }
}