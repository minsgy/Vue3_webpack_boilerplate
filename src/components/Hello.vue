<template>
  <label>
    <!-- v-model 양방향 시 props로 인해 오류가 발생합니다. (바뀌지도 않음) -->
    <!-- emit을 통해서 자식에서 부모로 올려주는 방식을 구현합니다. -->
    <input 
      :value="message"
      @input="$emit('update:message', $event.target.value)" />
  </label>
  <label>
    <input
      :value="name"
      @input="$emit('update:name', $event.target.value)" />
  </label>
</template>

<script>
  export default {
    props: {
      // v-model과 연결 된 "예약어" => model 값이 여기로 들어옴. modelValue
      // 이름 변경도 가능합니다. 대신 다른 처리가 필요합니다.
      message: {
        type: String,
        default: ''
      },
      name : {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
