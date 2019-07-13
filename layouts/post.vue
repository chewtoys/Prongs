<template>
<div id="post">
  <v-navbar v-bind:class="{'is-fixed-top':hasStickyNavbar}"></v-navbar>
  <nuxt />
  <v-footer></v-footer>
</div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar';
import TheFooter from '~/components/TheFooter';

export default {
  components: {
    'v-navbar': TheNavbar,
    'v-footer': TheFooter
  },
  data () {
    return {
      hasStickyNavbar: true
    }
  },
  mounted () {
    document.body.classList.toggle('fixed', this.hasStickyNavbar);
  }
}
</script>
