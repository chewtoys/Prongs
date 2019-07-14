<template>
<div>
	<v-herosection v-bind:photo-file="photoFile" v-bind:hero-content="heroContent" v-bind:class="{'is-fullheight-with-navbar':hasStickyNavbar}"></v-herosection>
	<v-aboutsection v-bind:about-body="aboutBody"></v-aboutsection>
	<v-researchsection v-bind:research-items="researchItems"></v-researchsection>
</div>
</template>

<script>
import TheHeroSection from '~/components/TheHeroSection.vue';
import TheAboutSection from '~/components/TheAboutSection.vue';
import TheResearchSection from '~/components/TheResearchSection.vue';

// require the markdown-it and front-matter
const fm = require("front-matter");
var md = require("markdown-it")({
  html: true,
  typographer: true,
  linkify: true
});

export default {
	components: {
		'v-herosection': TheHeroSection,
		'v-aboutsection': TheAboutSection,
		'v-researchsection': TheResearchSection
	},
	data () {
		return {
			photoFile: 'photo.jpg',
			heroContent: {
        title: "Hi,I'm",
        name: "Guang Shi",
        msg: "Welcome to my personal site! I'm a postdoctoral researcher at Univ. of Texas at Austin. I have a Ph.D. in Biophysics from Univ. of Maryland at College Park. I use computational and theoretical methods to study biological systems."
      },
      researchItems: [
				{
					id: 1,
					name: 'Chromosome Copolymer Model',
					image: 'project-ccm-illustration.jpg',
					link: '#'
				},
				{
					id: 2,
					name: 'FISH-Hi-C Paradox',
					image: 'project-heterogeneity-illustration.jpg',
					link: '#'
				},
				{
					id: 3,
					name: '3D Reconstuction of Chromosomes',
					image: 'project-reconstruction-illustration.jpg',
					link: '#'
				},
				{
					id: 4,
					name: 'Multi-motors System',
					image: 'project-motor-illustration.jpg',
					link: '#'
				}
			],
			hasStickyNavbar: true
		}
	},
  async asyncData () {
    // We read the markdown file by looking at the `post` parameter
    // in the URL and searching for about.md markdown file in
    // the content directory
    const fileContent = await import(`~/contents/about.md`);
    // We process the raw output through front-matter
    // (markdownit was giving me garbled results)
    let res = fm(fileContent.default);
    return {
      // attributes will be an object containing the markdown metadata
      aboutAttributes: res.attributes,
      // content will contain the body of the markdown file,
      // rendered in HTML via the `markdownit` class
      aboutBody: md.render(res.body)
    };
  },
  layout: 'home'
}
</script>
