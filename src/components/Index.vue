<template>
    <div class="content">        
        <portfolio></portfolio>

        

    </div>
    
    
</template>

<script>
import Portfolio from './Portfolio.vue'
import About from './About.vue'
import Project from './projects/Project.vue'
import SocialLinks from './SocialLinks.vue'

export default {
  name: 'content',

  components: {
    Portfolio,
    About,
    Project,
    SocialLinks

  }
}
</script>

<style>

</style>
