<template>
  <div>
    <v-gnavbar></v-gnavbar>
    <section class="section">
      <div class="columns is-centered is-multiline is-gapless">
        <template v-for="album in albums">
          <div
            :key="album.id"
            class="column is-4-desktop is-6-tablet is-relative"
            :style="{ background: pickColor() }"
          >
            <nuxt-link :to="'/gallery/' + album.slug">
              <figure class="image is-opacity-hover">
                <img v-lazy="getImgUrl(album.cover)" class="gallery-image" />
              </figure>
            </nuxt-link>
            <!--<p class="gallery-text">New York</p>-->
          </div>
        </template>
      </div>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import GalleryNavbar from '~/components/GalleryNavbar'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    'v-gnavbar': GalleryNavbar,
    'v-footer': TheFooter
  },
  data() {
    return {
      backgroundColors: [
        '#E0EEE8',
        '#BBCDC5',
        '#424C50',
        '#A1AFC9',
        '#D1D9E0',
        '#D2F0F4',
        '#FFFBF0',
        '#F0FCFF',
        '#F3F9F1',
        '#FCEFE8',
        '#F0F0F4',
        '#758A99',
        '#E9E7EF'
      ],
      albums: null
    }
  },
  async asyncData({ app }) {
    // use axios to get cover image for each album
    const albums = (await app.$axios.get('/api/gallery/albums')).data
    return { albums }
  },
  methods: {
    getImgUrl(photoname) {
      return require('~/contents/gallery/' + photoname)
    },
    pickColor() {
      return this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)]
    }
  },
  head() {
    return {
      title:
        this.$route.name.charAt(0).toUpperCase() +
        this.$route.name.slice(1) +
        ' ' +
        process.env.siteTitleSeparator +
        ' ' +
        process.env.siteTitle,
      meta: [
        {
          name: 'description',
          hid: 'description',
          content:
            this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
        },
        // Open Graph
        {
          name: 'og:site_name',
          hid: 'og:site_name',
          content: process.env.siteTitle
        },
        {
          name: 'og:title',
          hid: 'og:title',
          content:
            this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content:
            this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1)
        },
        { name: 'og:type', hid: 'og:type', content: 'website' }
      ]
    }
  },
  layout: 'gallery'
}
</script>

<style lang="scss" scoped>
.gallery-image {
  object-fit: cover;
  //box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.gallery-text {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2rem;
}

.image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.column::before {
  content: '';
  float: left;
  padding-top: 100%;
}

.column {
  display: flex;
  align-items: center;
}

.section {
  padding: 0;
}

.parallax-wrapper {
  /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
  height: 100vh;
  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
  overflow-x: hidden;
  /* Enable scrolling on the page. */
  overflow-y: auto;
  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
  perspective: 2px;
}

.parallax::after {
  /* Display and position the pseudo-element */
  content: ' ';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Move the pseudo-element back away from the camera,
   * then scale it back up to fill the viewport.
   * Because the pseudo-element is further away, it appears to move more slowly, like in real life. */
  transform: translateZ(-1px) scale(1.5);
  /* Force the background image to fill the whole element. */
  background-size: 100%;
  background-position: center center;
  background-size: cover;
  /* Keep the image from overlapping sibling elements. */
  z-index: -1;
}

/*
.has-background-image::after {
  background-image: url('~assets/gallery/Forest-in-snow-large.jpg');
}
*/
</style>
