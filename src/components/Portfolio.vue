<template>
<div class="portfolio--wrapper">
  <div class="header">
   <span></span>
  </div>  
  <container style="padding-top: 2em">    
    <grid horizontal="center" vertical="center"  :rwd="{compact: 'stack'}">
        <grid-item size='1/3' :rwd="{ compact: '3/3'}">
          <div class="portfolio--tab">
            <router-link to="#">
            <div class="portfolio--tab__img">
              
            </div>
            </router-link>            
          </div>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '3/3'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '3/3'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
    </grid :rwd="{compact: 'stack'}">
     <grid>
        <grid-item size='1/3' :rwd="{ compact: '1/1'}">
          <div class="portfolio--tab">
            <router-link to="#">
            <div class="portfolio--tab__img">
              
            </div>
            </router-link>            
          </div>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '1/1'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '1/1'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
    </grid :rwd="{compact: 'stack'}">
    <grid >
        <grid-item size='1/3' :rwd="{ compact: '1/1'}">
          <div class="portfolio--tab">
            <router-link to="#">
            <div class="portfolio--tab__img">
              
            </div>
            </router-link>            
          </div>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '3/3'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '3/3'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
    </grid>    

  </container>
</div>  
</template>

<script>
export default {
  name: 'portfolio'
}
</script>   

    
<style scoped lang='scss'>
.header {
  padding: 2em 2em;
  font-size: 42px;
  font-weight: 500;

  
}

.portfolio--tab {
  overflow: hidden;
  width: 640px;
  height: 420px;
}
.portfolio--tab__img {
  background-image: url("/static/img/next.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  transition: 1s ease-out;
}

.portfolio--tab:hover .portfolio--tab__img,
.portfolio--tab:focus .portfolio--tab__img {
  transform: scale(1.1);
}
</style>
