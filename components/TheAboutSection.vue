<template>
<section class="hero" id="about">
	<div class="hero-body">
	  <div class="container">
	    <div class="content has-text-centered">
	      <h1 class="title is-2 has-divider has-text-weight-normal">About</h1>
	    </div>
	    <div class="columns is-variable is-8">
	      <!-- insert contact form here -->
	      <div class="column is-7">
	        <div id="about-content">
	          <v-singlepost v-bind:show-title="false" v-bind:show-meta="false" v-bind:show-divider="false" v-bind:post-body="aboutBody"></v-singlepost>
	        </div>
	      </div>
	      <!-- insert contact form here -->
	      <div class="column is-5">
	        <div class="content" id="contact-form-title">
	          <h2>contact me</h2>
	        </div>
	        <v-contactform></v-contactform>
	      </div>
	    </div>
	  </div>
	</div>
</section>
</template>

<script>
import TheContactForm from '~/components/TheContactForm';
import SinglePost from '~/components/SinglePost';

export default {
	components: {
		'v-contactform': TheContactForm,
		'v-singlepost': SinglePost
	},
	props: {
		aboutBody: String
	}
}
</script>