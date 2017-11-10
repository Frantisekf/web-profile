<template>

<div class="portfolio--wrapper"> 
  <container style="padding-top: 8em">    
    <grid  vertical="center"  :rwd="{compact: 'stack'}">
      
        <grid-item size='1/3' :rwd="{ compact: '3/3'}">
          <div class="portfolio--tab">
            <router-link to="project">
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
    </grid >
     <grid style="padding-top: 2em"   vertical="center"  :rwd="{compact: 'stack'}">
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
    </grid >
     <grid style="padding-top: 2em"   vertical="center"  :rwd="{compact: 'stack'}">
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
    </grid >
     <grid style="padding-top: 2em"   vertical="center"  :rwd="{compact: 'stack'}">
        <grid-item size='1/3' :rwd="{ compact: '3/3'}">
          <div class="portfolio--tab">
            <router-link to="#">
            <div class="portfolio--tab__img">
              
            </div>
            </router-link>            
          </div>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '/3'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </router-link>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '2/3'}">
         <router-link to="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">          
              
            </div>            
          </div>
         </router-link>
        </grid-item>
    </grid >
  </container>
</div>
 
</template>

<script>
export default {
  name: 'portfolio'
}
</script>
    
<style scoped lang='scss'>

.portfolio--wrapper{ 
  padding: 0;
  margin: auto; 
}

.portfolio--tab {
  overflow: hidden;
  width: 100%;
  height: 470px;
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
