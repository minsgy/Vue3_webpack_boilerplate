<template lang="">
  <button>
    <slot>Minseok</slot>
    <!-- Fallback : Default값 지정 -->
  </button>
</template>
<script>
export default {
 
}
</script>
<style scoped lang="scss">
  button{
   padding: 10px 20px;
   &:hover{ 
    background-color: orange;
    transform: scale(1.2);
   }
  }
</style>