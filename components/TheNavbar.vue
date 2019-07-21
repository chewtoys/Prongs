<template>
<nav class="navbar is-spaced">
  <div class="container">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item" active-class="sitelogo-link-active" exact-active-class="sitelogo-exact-link-active">
          <SiteLogo :class="{ animated: true }" :width="30" />
      </nuxt-link>

      <span class="icon side-menu-button" v-click-outside="emitSignal" @click="$emit('clickMenuButton')">
          <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>
      </span>
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
import ClickOutside from 'vue-click-outside';

export default {
  components: {
    SiteLogo,
    ClickOutside
  },
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
          link:'/gallery'
        }
      ]
    }
  },
  methods: {
    emitSignal: function () {
      this.$emit('clickOutside')
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang='scss' scoped>
// nuxt-link active class
.nuxt-link-exact-active, .nuxt-link-active {
  background-color: $primary;
  color: $white;
}

.side-menu-button {
  margin-left: auto;
  display: inline-flex;
  align-self: center;
  margin-right: 0.5rem;
}

@media screen and (min-width: 1024px) {
  .side-menu-button {
    display: none;
  }
}
</style>
