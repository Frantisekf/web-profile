<template>
  <div class="social__links">
    <ul class="links">
      <li class="link" v-for="link in socialLinks" >
        <a :href="link.url" :title="link.name">
          <i :class="'icon-'+link.icon" ></i>
        </a>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'social-links',
  props: {
    links: Array
  },
  data () {
    return {
      socialLinks: [
        {
          name: 'Email',
          icon: 'mail',
          url: '#'
        },
        {
          name: 'LinkedIn',
          icon: 'linkedin',
          url: '#'
        },
        {
          name: 'Github',
          icon: 'github',
          url: '#'
        },
        {
          name: 'Facebook',
          icon: 'facebook',
          url: '#'
        },
        {
          name: 'Instagram',
          icon: 'instagram',
          url: '#'
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
  .links { 
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0;
    justify-content: center;
    flex: 0 0 auto ;
    width: 20% ;
  }

  .link {
    flex: 1;
    text-align: center;
    display: inline-block;
    justify-content: center;  
  
  
  }
</style>
