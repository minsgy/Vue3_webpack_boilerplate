<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello />
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
  created(){
    this.init()
    // this.$fetch('https://jsonplaceholder.typicode.com/todos/1')
  },
  methods: {
    async init() {
      // options를 통한 name 변경
      const res = await this.$myName('https://jsonplaceholder.typicode.com/todos/1')
      console.log(res)
    }
  }
}
</script>
