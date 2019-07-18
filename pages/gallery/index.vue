<template>
<div class="parallax-wrapper">
  <section class="hero is-fullheight parallax has-background-image">
  </section>
  <section class="section has-background-white-bis">
		<div class="container">
			<div class="columns is-centered is-multiline is-variable is-5">
				<div class="column is-4">
	        <figure class="image is-3by2 is-opacity-hover" style="margin-bottom:10px;">
	          <img v-lazy="getImgUrl('1.jpg')" class="gallery-image">
	        </figure>
	        <div class="content has-text-centered">
	          <p class="subtitle">New York #1</p>
	        </div>
	      </div>
	      <div class="column is-4">
	        <figure class="image is-3by2 is-opacity-hover" style="margin-bottom:10px;">
	          <img v-lazy="getImgUrl('2.jpg')" class="gallery-image">
	        </figure>
	        <div class="content has-text-centered">
	          <p class="subtitle">New York #2</p>
	        </div>
	      </div>
	      <div class="column is-4">
	        <figure class="image is-3by2 is-opacity-hover" style="margin-bottom:10px;">
	          <img v-lazy="getImgUrl('3.jpg')" class="gallery-image">
	        </figure>
	        <div class="content has-text-centered">
	          <p class="subtitle">Alaska #1</p>
	        </div>
	      </div>
	      <div class="column is-4">
	        <figure class="image is-3by2 is-opacity-hover" style="margin-bottom:10px;">
	          <img v-lazy="getImgUrl('4.jpg')" class="gallery-image">
	        </figure>
	        <div class="content has-text-centered">
	          <p class="subtitle">California #1</p>
	        </div>
	      </div>
	      <div class="column is-4">
	        <figure class="image is-3by2 is-opacity-hover" style="margin-bottom:10px;">
	          <img v-lazy="getImgUrl('5.jpg')" class="gallery-image">
	        </figure>
	        <div class="content has-text-centered">
	          <p class="subtitle">Alaska #2</p>
	        </div>
	      </div>
	      <div class="column is-4">
	        <figure class="image is-3by2 is-opacity-hover" style="margin-bottom:10px;">
	          <img v-lazy="getImgUrl('6.jpg')" class="gallery-image">
	        </figure>
	        <div class="content has-text-centered">
	          <p class="subtitle">California #2</p>
	        </div>
	      </div>
			</div>
		</div>
	</section>
	<v-footer></v-footer>
</div>
</template>

<script>
import TheFooter from '~/components/TheFooter';

export default {
	components: {
    'v-footer': TheFooter
  },
	methods: {
		getImgUrl (pic) {
			return require('~/assets/gallery/'+pic)
		}
	},
	head () {
    return {
      title: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1) + ' ' + process.env.siteTitleSeparator + ' ' + process.env.siteTitle,
      meta: [
        { name: 'description', hid: 'description', content: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1) },
        // Open Graph
        { name: 'og:site_name', hid: 'og:site_name', content: process.env.siteTitle },
        { name: 'og:title', hid: 'og:title', content: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1) },
        { name: 'og:description', hid: 'og:description', content: this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1) },
        { name: 'og:type', hid: 'og:type', content: 'website' }
      ]
    }
  },
	layout: 'gallery'
}
</script>

<style lang='scss' scoped>
.gallery-image {
	object-fit:cover;
	box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
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
  content: " ";
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

.has-background-image::after {
  background-image: url('~assets/gallery/Forest-in-snow-large.jpg');
}
</style>