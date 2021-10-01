<template>
  <h1>
    {{ name }}
  </h1>
  <h1>
    {{ msg }}
  </h1>
  <!-- :message와 같이 명시해주어서 예약어를 사용 하지 않아도 됩니다. -->
  <!-- 부모에 양방향 데이터를 설정해서 통신이 가능하다 -->
  <Hello
    v-model:message="msg"
    v-model:name="name" />
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
      name: '민석'
    }
  },
}
</script>
