<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style scoped lang="scss"> 
  @import "assets/scss/main";

  #app {
  margin-left:auto;
  margin-right:auto;
  }

  
</style>
