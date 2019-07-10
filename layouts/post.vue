<template>
<div id="post">
  <v-navbar v-bind:class="{'is-fixed-top':hasStickyNavbar}"></v-navbar>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half-desktop is-two-thirds-tablet is-full-mobile">
          <nuxt />
        </div>
      </div>
    </div>
  </section>
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
