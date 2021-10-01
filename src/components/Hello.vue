<template>
  <h1>ㅎㅇㅋㅋ</h1>
  <!-- 객체 데이터로 랩핑되서 넘어와서 사용 할 수 있습니다. {} 로도 사용가능 -->
  <slot :hello="123"></slot>
  <slot name="abc"></slot>
</template>

<style scoped lang="scss">
$color: red;
h1 {
  color: $color;
}
</style>
