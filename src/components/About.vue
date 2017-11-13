<template>
  <section id="about" class="reveal">     
    <container style="padding-top: 4em">
      <grid horizontal="center">
        <grid-item size='1/1'>
        <div class="about--header">
          <h1>HEADER h1</h1>
        </div>
        </grid-item>
      </grid>
      <grid>
          <grid-item size='1/1' class='img-grid'>
            <div class="about__img">
              <img src="/static/img/placeholder-square.jpg" width="100%" height="500"/>
            </div>
          </grid-item>
      </grid>
      <grid>
        <grid-item size='1/6' :rwd="{compact: '0/6'}" >
        </grid-item>
         <grid-item size='4/6' :rwd="{compact: '6/6'}">
          <div class="about__copy">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab praesentium perferendis vero ullam maiores fugiat molestiae corporis quasi sequi, culpa corrupti doloremque ipsam, cupiditate, laborum aut fugit tempore illum amet.</p>
          </div>           
        </grid-item>
         <grid-item size='1/6':rwd="{compact: '0/6'}">          
        </grid-item>
      </grid>
    </container>
  </section>
</template>

<script>
// import sr from '@/assets/js/sr'
export default {
  name: 'about'
  // mounted () {
  //   sr.reveal('.reveal', {
  //     reset: true,
  //     distance: '50px',
  //     origin: 'left',
  //     mobile: false,
  //     duration: 500,
  //     viewFactor: 1
  //   }, 50)
  // }
}
</script>

<style scoped lang="scss">
.about-header {  
    text-align: center;  
}
.about__img {
  padding-bottom: 2em;
}
.about__copy {
  text-align: center
}

@media (max-width: 340px){
  .img-grid {
    width: 100%;
  }
}

</style>
