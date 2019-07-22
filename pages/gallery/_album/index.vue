<template>
<div>
	<v-gnavbar></v-gnavbar>
	<section class="section">
		<div class="container">
			<div class="columns is-centered is-multiline">
				<template v-for="photo in album">
					<div class="column is-6">
						<figure class="image is-opacity-hover">
		          <img v-lazy="getImgUrl(photo)">
		        </figure>
					</div>
				</template>
			</div>
		</div>
	</section>
</div>
</template>

<script>
import GalleryNavbar from '~/components/GalleryNavbar';

export default {
	components: {
		'v-gnavbar' : GalleryNavbar
	},
	data () {
		return {
			album: null
		}
	},
	async asyncData ({ route }) {
		if (process.server) {
			//const fs = require('fs');
			const glob = require('glob');
			var photoPaths = glob.sync(`contents/gallery/${route.params.album}/*.jpg`)
			//var photoPaths = fs.readdirSync(`contents/gallery/${route.params.album}/`);
			console.log(photoPaths);
		};
		return {
			album: photoPaths
		}
	},
	methods: {
		getImgUrl (pic) {
			return require('~/' + pic)
		}
	},
	layout: 'gallery'
}
</script>

<style lang='scss' scoped>
</style>