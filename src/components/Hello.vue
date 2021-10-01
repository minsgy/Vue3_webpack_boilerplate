<template>
  <h1>{{ id }} / {{ title }} / {{ email }}</h1>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    email: {
      type: String,
      default: 'leon@abc.com'
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
