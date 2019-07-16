<template>
<div>
  <v-side-menu :class="{ 'side-menu-active': sideMenuToggled }"></v-side-menu>
  <v-navbar @clickOutside="hideSideMenu" @clickMenuButton="showSideMenu" :class="{ 'is-fixed-top': hasStickyNavbar }"></v-navbar>
  <nuxt />
  <v-footer></v-footer>
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
</style>
