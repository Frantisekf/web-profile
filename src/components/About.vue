<template>
  <section id="about">     
    <container width="1260px" style="padding-top: 6em">
      <grid horizontal="center">
        <grid-item size='1/1'>
        <div class="about--header">
          <h1>Name Surname</h1>
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
        </grid-item>
         <grid-item size='1/6'>          
        </grid-item>
      </grid>
    </container>
  </section>
</template>

<script>
export default {
  name: 'about'
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

</style>
