<template>
  <form @submit.prevent>
    <input
      v-model="userID"
      placeholder="your ID"
      type="text" />
    <input
      v-model="userPW"
      placeholder="your PW"
      type="password" />
    <button @click="logIn">
      login
    </button>
  </form>
</template>

<script>
export default {
 data() {
  return{
   userID: '',
   userPW: ''
  }
 },
 methods: {
  logIn() {
   this.$store.dispatch('user/logIn', {
    id: this.userID,
    pw: this.userPW
   })
  },
  
 }
}
</script>