<template>
  <h1>
    {{ msg }}
  </h1>
  <Hello>
    <!-- v-slot == # 과 같습니다. slot의 이름에 해당되는 곳 대입해주기! -->
    <template #fox>
      <h2>
        Hello
      </h2>
    </template>
    <template #hello>
      <h2>
        Fox
      </h2>
    </template>
  </Hello>
  <Btn>ClickMe!</Btn>
  <Btn />
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
}
</script>
