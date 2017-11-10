<template>
  <div class="social__links">
    <ul>
      <li v-for="link in socialLinks" >
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
    ul {    
    text-align: center;  
    
      li {
        display: inline-block;      
        margin-right: 1em;       
      }
  }
</style>
