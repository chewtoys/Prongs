<template>
  <div>
    <v-gnavbar></v-gnavbar>
    <section class="section">
      <div class="container">
        <div class="columns is-centered is-multiline">
          <template v-for="photo in album">
            <div :key="photo.id" class="column is-6">
              <figure class="image">
                <!--<img v-lazy="getImgUrl(photo)">-->
                <img v-lazy="getImgUrl(photo.name)" />
              </figure>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GalleryNavbar from '~/components/GalleryNavbar'
//var photos = require.context('~/contents/gallery', true, /\.(gif|jpg|jpe?g|tiff|png)$/)

export default {
  components: {
    'v-gnavbar': GalleryNavbar
  },
  data() {
    return {
      album: null
    }
  },
  async asyncData({ app, params }) {
    /*
    if (process.server) {
      const glob = require('glob')
      var _album = glob.sync(`./${route.params.album}/*[!(min|placeholder)].@(jp?(e)g|png|tiff|gif)`, { cwd: 'contents/gallery/' });
      return {
        album: _album
      }
    }
    */
    const album = (await app.$axios.get(`/api/gallery/albums/${params.album}`)).data
    return { album }
  },
  methods: {
    getImgUrl(photoname) {
      return require('~/contents/gallery/' + photoname)
    }
  },
  head() {
    return {
      title: this.$route.params.album.charAt(0).toUpperCase() + this.$route.params.album.slice(1) + ' ' + process.env.siteTitleSeparator + ' ' + 'Photos' + ' ' + process.env.siteTitleSeparator + ' ' + process.env.siteTitle,
      meta: [
        { name: 'description', hid: 'description', content: this.$route.params.album.charAt(0).toUpperCase() + this.$route.params.album.slice(1) + ' album photography' },
        // Open Graph
        { name: 'og:site_name', hid: 'og:site_name', content: process.env.siteTitle },
        { name: 'og:title', hid: 'og:title', content: this.$route.params.album.charAt(0).toUpperCase() + this.$route.params.album.slice(1) + ' album photography' },
        { name: 'og:description', hid: 'og:description', content: this.$route.params.album.charAt(0).toUpperCase() + this.$route.params.album.slice(1) + ' album photography' },
        { name: 'og:type', hid: 'og:type', content: 'website' }
      ]
    }
  },
  layout: 'gallery'
}
</script>

<style lang='scss' scoped>
</style>