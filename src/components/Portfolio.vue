<template>
  <container style="padding-top: 6em">
    <grid >
        <grid-item size='1/3' :rwd="{ compact: '3/3'}">
          <div class="portfolio--tab">
            <a href="#">
            <div class="portfolio--tab__img">
              
            </div>
            </a>            
          </div>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '3/3'}">
         <a href="#">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
         </a>
        </grid-item>
         <grid-item size='1/3' :rwd="{ compact: '3/3'}">
          <div class="portfolio--tab">
            <div class="portfolio--tab__img">              
              
            </div>            
          </div>
        </grid-item>
    </grid>
     

  </container>  
</template>

<script>
export default {
  name: 'Portfolio'
}
</script>   

    
<style scoped lang='scss'>
.portfolio--tab {
  overflow: hidden;
  width: 400px;
  height: 300px;
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
