<template>
  <article class="homepage">
    <section class="profile--card">
      <div class="profile--photo">
        <img src="/static/photo-circle.png" width="120" height="120"/>
      </div>
      <h1>František Farkaš</h1>
      <h2>Frontend Developer</h2>
    </section>
    <div class="divider"></div>
    <section class="profile--about">
      <p>I am a Frontend dev currently living in prague and working for <a href="https://www.bistudio.com/">bohemia interactive</a>
      </p>
    </section>

  </article>
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {}
    }
  }
</script>


<style scoped lang="scss">
  @import "../assets/scss/main";

  .profile--card {
    text-align: left;
  }

  .profile--photo {
    float: left;
    margin-right: 3em;
  }

  .divider {
    color: #D7DADB;
    border: solid 1px;
    margin-top: 5em;
  }

  .profile--about {

  }

</style>
