<template>
<section class="section">
  <div class="container">
    <div class="content has-text-centered">
      <h1 class="title is-2 has-divider has-text-weight-normal">Research Projects</h1>
    </div>
    <div class="columns is-centered">
    	<template v-for="researchItem in researchItems">
    		<div class="column is-3">
    			<nuxt-link v-bind:key="researchItem.id" v-bind:to="researchItem.link">
    				<div class="card is-pop-hover" style="border-radius:2%;height:100%;">
	            <div class="card-header is-shadowless">
	              <nuxt-link v-bind:key="researchItem.id" v-bind:to="researchItem.link" class="card-header-title">{{ researchItem.name }}</nuxt-link>
	            </div>
	            <div class="card-image" style="padding:12px;">
	              <figure class="image is-1by1">
	              	<!--
	                <img v-bind:src="getImgUrl(researchItem.image)" alt="Placeholder image" style="object-fit:contain;">
	            	-->
	            	<img v-lazy="getImgUrl(researchItem.image)" alt="Placeholder image" style="object-fit:contain;" >
	              </figure>
	            </div>
	          </div>
    			</nuxt-link>
	      </div>
    	</template>
    </div>
  </div>
</section>
</template>

<script>
export default {
	props: {
		researchItems: Array
	},
	methods: {
		getImgUrl (pic) {
			return require('~/assets/images/'+pic)
		}
	}
}
</script>