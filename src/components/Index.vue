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
import Contact from './Contact.vue'

export default {
  name: 'content',

  components: {
    MainHeader,
    Portfolio,
    About,
    Project,
    Contact

  }
}
</script>

<style>

</style>
