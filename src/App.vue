<template>
  <RouterLink to="/">
    Home
  </RouterLink>
  <RouterLink to="/about">
    About
  </RouterLink> 
  <RouterLink
    :to="{ name : 'docsId', 
           params: { id : '777'},
           query: {
             name: 'Minseok',
             age: 34,
             email: 'minseok@naver.com'
           }}">
    Docs
  </RouterLink>
  <!-- name을 통해서 이동이 가능 -->
  <button @click="$router.push({name : 'home'})">
    Home
  </button> 
  <button @click="$router.push({name : 'about'})">
    about
  </button> 
  <button @click="$router.push('/documents/3')">
    docs
  </button> 
  <RouterView />
</template>
<script>

export default {

  data() {
    return {
      msg: 'Hello Vue...',
    }
  },
}
</script>
