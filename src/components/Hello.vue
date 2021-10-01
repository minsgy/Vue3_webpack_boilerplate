<template>
  <div>
    <h1 @click="$emit('please', 7)">
      Please
    </h1>
    <h1 @click="$emit('click')">
      Click
    </h1>
  </div>
</template>
<script>
  export default {
    // native 클릭 이벤트가 무시됩니다. 명시적으로 지정해줘야 사용가능!
    emits: {
      click: null,
      please: number => {
        return number > 10
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
