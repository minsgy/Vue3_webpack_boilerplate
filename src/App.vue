<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello ref="hello" />
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
  mounted() {
    // $el은 같은 속성이 여러 개면 사용이 안됩니다.
    console.log(this.$refs.hello.$refs.world)
  }
}
</script>
