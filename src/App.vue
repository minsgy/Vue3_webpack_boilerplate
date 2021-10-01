<template>
  <Hello
    v-bind="post" />
</template>
<script>
import Hello from '~/components/Hello'

export default {
  components : {
    Hello
  },
  data() {
    return {
      post: {
        id: 2,
        title: 'Hello Vue',
        email: 'minsgy@naver.com'
      }
    }
  }
}
</script>
