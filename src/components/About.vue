<template>
<transition  mode="out-in" name='slide-fade'  appear>
  <section id="about">     
    <container width="1260px"style="padding-top: 4em">
      <grid horizontal="center">
        <grid-item size='1/1'>
        <div class="about--header">
          <h1>HEADER h1</h1>
        </div>
        </grid-item>
      </grid>
      <grid>
          <grid-item size='1/1'>
            <div class="about__img">
              <img src="/static/img/placeholder-square.jpg" width="100%" height="500"/>
            </div>
          </grid-item>
      </grid>
      <grid>
        <grid-item size='1/6'>
        </grid-item>
         <grid-item size='4/6'>
          <div class="about__copy">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab praesentium perferendis vero ullam maiores fugiat molestiae corporis quasi sequi, culpa corrupti doloremque ipsam, cupiditate, laborum aut fugit tempore illum amet.</p>
          </div>
          <div class="divider"></div>
            <social-links></social-links>
        </grid-item>
         <grid-item size='1/6'>          
        </grid-item>
      </grid>
    </container>
  </section>
</transition>
</template>

<script>
import SocialLinks from '../components/SocialLinks.vue'

export default {
  name: 'about',
  components: { SocialLinks }
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


// Transitions & Animations
//-------------------------------
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(20px);
  opacity: 0;
}

</style>
