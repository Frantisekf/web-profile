<<template>
    <div class="content">
        <portfolio></portfolio>

    </div>
</template>

<script>
import Portfolio from '../components/Portfolio.vue'
import About from '../components/About.vue'
import Project from '../components/projects/Project.vue'

export default {
  name: 'content',

  components: {
    Portfolio,
    About,
    Project
  }
}
</script>

<style>

</style>
