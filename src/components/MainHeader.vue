<template>
  <div id="navigation" v-sticky>
      <ul class="nav-items">
          <li class="nav-item"><router-link to="/">PORTFOLIO</router-link></li>        
          <li class="nav--item"><router-link to="About">ABOUT</router-link></li>
          <li class="nav-item"><router-link to="Contact">CONTACT</router-link></li>                 
      </ul>      
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
  padding: 1em 1em; 
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;

  li {    
    display: inline;
    margin-right: 1.5em;  
  }

.nav-items{
  display: flex;
  flex-direction: row;
}

 .nav-item {
   flex: 1;
   text-align: center;
 }
 

  &.sticky {
   // position: fixed;
  max-width: 100% !important;
    
  }
}
</style>
