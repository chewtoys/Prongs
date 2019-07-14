<template>
<nav class="navbar is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
          <SiteLogo v-bind:class="{ animated: true }" v-bind:width="30" />
      </nuxt-link>

      <div class="navbar-item is-hidden-desktop">
        <span class="icon is-enlarge-hover">
          <i class="fab fa-github fa-fw fa-lg"></i>
        </span>
      </div>

      <div class="navbar-item is-hidden-desktop">
        <span class="icon is-enlarge-hover">
          <i class="fab fa-instagram fa-fw fa-lg"></i>
        </span>
      </div>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <template v-for="navbaritem in navbaritems">
          <nuxt-link v-bind:key="navbaritem.id" v-bind:to="navbaritem.link" class="navbar-item is-uppercase has-text-weight-semibold">{{ navbaritem.name }}</nuxt-link>
        </template>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import SiteLogo from '~/components/SiteLogo.vue'

export default {
  data () {
    return {
      navbaritems: [
        {
          id:1,
          name:'research',
          link:'/research'
        },
        {
          id:2,
          name:'publication',
          link:'/publication'
        },
        {
          id:3,
          name:'blog',
          link:'/posts'
        },
        {
          id:4,
          name:'photography',
          link:'/photography'
        }
      ]
    }
  },
  components: {
    SiteLogo
  }
}
</script>
