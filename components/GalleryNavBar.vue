<template>
<nav class="navbar is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item" active-class="sitelogo-link-active" exact-active-class="sitelogo-exact-link-active">
          <SiteLogo :class="{ animated: true }" :width="30" />
      </nuxt-link>
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
import SiteLogo from '~/components/SiteLogo.vue';

export default {
  components: {
    SiteLogo
  },
  data () {
    return {
      navbaritems: [
        {
          id:1,
          name:'landscape',
          link:'/gallery/landscape'
        },
        {
          id:2,
          name:'street',
          link:'/gallery/street'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
// nuxt-link active class
.nuxt-link-exact-active, .nuxt-link-active {
  background-color: $primary;
  color: $white;
}
</style>
