<template>
	<div id='posts'>
		<template v-for="post in posts">
			<div>
				{{post.date}}
			</div>
			<div>
				{{post.excerpt}}
			</div>
			<nuxt-link :to="#">Read more</nuxt-link>
		</template>
	</div>
</template>

<script>
const glob = require('glob');
let files = glob.sync( '**/*.md' , { cwd: 'contents/posts' });

export default {
	data: function () {
		return {
			posts: null
		}
	},
	async asyncData () {
		var posts = [];
		for (const file of files) {
			const fileContent = await import(`~/contents/posts/${file}`);
			let res = fm(fileContent.default);
			posts.push(res.attributes);
		}
	},
	head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css', integrity: 'sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j', crossorigin: 'anonymous' }
      ]
    }
  }
}	
</script>