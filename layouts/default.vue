<template>
<div :class="{ 'side-menu-active': sideMenuToggled }">
  <v-side-menu></v-side-menu>
  <div class="sm-content-wrap">
    <div class="sm-content">
      <v-navbar @clickOutside="hideSideMenu" @clickMenuButton="showSideMenu" :class="{ 'is-fixed-top': hasStickyNavbar }"></v-navbar>
      <nuxt />
      <v-footer></v-footer>
    </div>
  </div>
</div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar';
import TheFooter from '~/components/TheFooter';
import TheSideMenu from '~/components/TheSideMenu';

export default {
  components: {
    'v-navbar': TheNavbar,
    'v-footer': TheFooter,
    'v-side-menu': TheSideMenu
  },
  data () {
    return {
      hasStickyNavbar: true,
      sideMenuToggled: false,
    }
  },
  methods: {
    hideSideMenu: function () {
      this.sideMenuToggled = false
    },
    showSideMenu: function () {
      this.sideMenuToggled = true
    }
  },
  mounted () {
    document.body.classList.toggle('fixed', this.hasStickyNavbar);
  }
}
</script>

<style lang='scss' scoped>
.sm-content::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  content: '';
  opacity: 0;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
  -webkit-transition: opacity 0.4s, -webkit-transform 0s 0.4s;
  transition: opacity 0.4s, transform 0s 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
}

.side-menu-active .sm-content::before {
  opacity: 1;
  -webkit-transition: opacity 0.8s;
  transition: opacity 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  transition-timing-function: cubic-bezier(0.7,0,0.3,1);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
</style>
