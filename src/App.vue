<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello />
  <button @click="increaseCount">
    Increase
  </button>
  <button @click="fetchTodo">
    update msg
  </button>
</template>
<script>
import Hello from '~/components/Hello'

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello Vue...',
    }
  },
  methods :{
    increaseCount() {
      // mutations는 commit 함수를 활용합니다.
      this.$store.commit('increaseCount')
    },
    fetchTodo() {
      this.$store.dispatch('fetchTodo')
    }
  }
}
</script>
