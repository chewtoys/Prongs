<template>
<div class="side-menu-wrap">
  <aside class="menu has-text-centered">
    <ul class="menu-list">
    	<template v-for="navbaritem in navbaritems">
    		<li>
          <nuxt-link v-bind:key="navbaritem.id" v-bind:to="navbaritem.link" class="is-uppercase has-text-weight-semibold">{{ navbaritem.name }}</nuxt-link>
        </li>
      </template>
    </ul>
  </aside>
</div>
</template>

<script>
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
          link:'/gallery'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
// nuxt-link active class
.nuxt-link-exact-active, .nuxt-link-active {
  background-color: $cyan;
  color: $blue;
}

.side-menu-wrap {
  top: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 1001;
  width: 300px;
  height: 100%;
  background: $grey-lighter;
  padding: 1.5em 1.5em 1.5em;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.side-menu-active .side-menu-wrap {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}
</style>