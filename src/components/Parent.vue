<template>
  <h1>
    Parent!
  </h1>
  <Child />
</template>
<script>
import Child from './Child.vue'
export default {
 components: {
  Child
 }
}
</script>
<style scoped lang="scss">
 $color: red;
 h1{
  color: $color;
 }
</style>