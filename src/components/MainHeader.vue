<template>
<div class="nav--wrapper">
  <nav id="navigation">
      <ul>
          <li class="nav--item "><router-link to="About">ABOUT</router-link></li>
          <li><router-link to="/">CONTACT</router-link></li>        
      </ul>      
      <router-view class="view"></router-view>
  </nav>
</div>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoper lang='scss'>
@import "../assets/scss/main";

#navigation {   
  float: right;
  //margin-right: 2em;
  padding: 2em 4em;
  height: 20px;
  
  ul {    
    list-style: none;
  }

  li {
    display: inline;    
    padding: .5em .5em;
    a {
      text-decoration: none;
      color: black;
    }
  }
}
</style>
