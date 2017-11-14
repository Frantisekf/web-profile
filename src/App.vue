<template>
  <div id="app">
    <div id="first">
    <main-header></main-header> 
    
      <img src="/static/img/backgrounds-cubist-02.svg" width="100%" height="auto" />
      </div>   
    <router-view></router-view>
    <div id="second"></div>
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
  position: relative;
  height: 100%;
  background-color: white;
   
}

#first {
  background-image: url('/static/img/background.png'); 
  width: 100%;
  height: 800px; 
  overflow: hidden;
}

#second {
  width: 100%;
  height: 700px;
  background-color: white;
}


  
</style>
