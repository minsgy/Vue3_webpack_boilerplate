<template>
  <h1> World.Vue</h1>
  <div>{{ reversedMsg }}</div>
  <div>{{ count }}</div>
</template>

<script>
import { state, getters } from '~/store'
export default {
 data() {
  return state
 },
 computed: {
  // 계산 된 데이터 (반응형 데이터)
  reversedMsg: getters.reversedMsg,
 }
}
</script>

<style scoped lang="scss">
$color: black;
h1 {
 color: $color;
}
</style>