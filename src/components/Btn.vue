<template>
  <button @click="log">
    click me!
  </button>
</template>

<script>
export default{
 methods: {
  log() {
   console.log('Click')
  }
 }
}
</script>