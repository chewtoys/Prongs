<template>
<section class="section">
  <div class='container'>
    <div class="columns is-centered">
    	<div class="column is-two-thirds-desktop is-two-thirds-tablet">
    		<h1 class="title is-1 page-title is-relative" style="display: inline-block;">Publication</h1>
    		<div class="content" v-html="publicationBody"></div>
    	</div>
    </div>
  </div>
</section>
</template>

<script>
export default {
	data: function() {
		return {
			publicationBody: null
		}
	},
	async asyncData ({ app }) {
		const fileContent = await import('~/contents/publication/publication.md');
    let res = app.$fm(fileContent.default);
    var content = app.$markdownRenderer.render(res.body);
    return {
    	publicationBody: content
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
  }
}
</script>

<style lang='scss' scoped>
.content /deep/ a {
	text-decoration: underline;
}

.content /deep/ li {
	padding-bottom: 1rem;
}
</style>