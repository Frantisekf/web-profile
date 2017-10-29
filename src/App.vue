<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  import HomePage from './components/HomePage'

  export default {
    name: 'app',
    components: {HomePage}
  }
</script>

<style scoped lang="scss">

  @import "./assets/scss/main";

  #app {
    font-family: Helvetica Neu, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
