<template>
  <nav id="navigation">
      <ul>
          <li><router-link to="/">PORTFOLIO</router-link></li>        
          <li class="nav--item "><router-link to="About">ABOUT</router-link></li>
          <li><router-link to="Contact">CONTACT</router-link></li>                 
      </ul>      
  </nav>
</template>

<script>
export default {
  name: 'main-header'
}
</script>

<style scoper lang='scss'>
@import "../assets/scss/main";

#navigation {
  padding: 1em 1em; 

  li {    
    display: inline;
    margin-right: 1.5em;  
  }
}
</style>
