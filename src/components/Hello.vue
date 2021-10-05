<template>
  <h1>ㅎㅇㅋㅋ</h1>
  <div>{{ count }}</div>
  <button @click="increaseCount">
    +
  </button>
  <button @click="decreaseCount">
    -
  </button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <button @click="fetchTodo">
    Fetch Todo!
  </button>
  <div>{{ msg }}</div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    // count라는 스토어에서 count라는 상태값 사용.
    ...mapState(['msg']), // 전역 관리 시 배열 값만 관리합니다.
    ...mapState('count', [
      'count'
    ]),
    ...mapState('message', [
      'message'
    ]),
    ...mapGetters('message', [
      'reversedMessage'
    ]),
  },
  methods: {
    ...mapMutations('count', [
      'increaseCount',
      'decreaseCount'
    ]),
    ...mapActions('message', [
      'fetchTodo'
    ]),
    // increaseCount(){
    //   this.$store.commit('count/increaseCount')
    // },
    // decreaseCount() {
    //   this.$store.commit('count/decreaseCount')
    // },
    // fetchTodo() {
    //   this.$store.dispatch('message/fetchTodo')
    // }
  }
}
</script>
<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
