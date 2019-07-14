<template>
<section class="section">
  <div class="columns is-centered">
  	<div class="column is-half-desktop is-two-thirds-tablet">
  		<h1 class="title is-1 page-title is-relative" style="display: inline-block;">Publication</h1>
  		<div class="content" v-html="publicationBody"></div>
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