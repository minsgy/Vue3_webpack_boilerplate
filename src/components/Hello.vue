<template>
  <!-- 최상위요소가 여러 개일시 class, style 등 바로 적용이 되지 않습니다. -->
  <!-- attrs : attributes을 활용해서 각자 지정을 해줄 수 있습니다.-->
  <!-- event는 on 접두사를 사용합니다. -->
  <!-- 객체 리터럴 활용가능 -->
  <h1 v-bind="$attrs">
    <!-- <h1
    :class="$attrs.class"
    :style="$attrs.style"
    @click="$attrs.onClick"> -->
    Hello
  </h1>
  <h2>
    Haha?!
  </h2>
</template>

<script>
  export default {
    // 자동 상속을 하지 않음을 명시
    inheritAttrs: false,
    props: {
      style: Object
    },
    mounted() {
      console.log(this.$attrs)
    }
  }
</script>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
