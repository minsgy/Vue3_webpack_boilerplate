<template>
  <h2>{{ msg }}</h2>
  <h2>{{ count }}</h2>
  <h2>{{ reversedMsg }}</h2>
</template>

<script>
export default {
  computed: {
    msg() {
      return this.$store.state.msg
    },
    count() {
      return this.$store.state.count
    },
    reversedMsg(){
      return this.$store.getters.reversedMsg
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
