<<template>
    <div class="content">
        <main-header></main-header>
        <portfolio></portfolio>

    </div>
</template>

<script>
import MainHeader from './MainHeader.vue'
import Portfolio from './Portfolio.vue'
import About from './About.vue'
import Project from './projects/Project.vue'

export default {
  name: 'content',

  components: {
    MainHeader,
    Portfolio,
    About,
    Project

  }
}
</script>

<style>

</style>
