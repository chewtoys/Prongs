<template>
<footer class="footer">
  <div class="content has-text-centered">
  	<p class="buttons are-medium">
    	<template v-for="socialLink in socialLinks">
    		<a class="button is-material-flat" v-bind:key="socialLink.id" v-bind:href="socialLink.link">
    			<span class="icon">
			      <font-awesome-icon :icon="[socialLink.iconName.split(' ')[0], socialLink.iconName.split(' ')[1]]" :size="iconSize"/>
			    </span>
    		</a>
      </template>
  	</p>
  	<p v-html="footerContent"></p>
  </div>
</footer>
</template>

<script>
export default {
  data() {
    return {
      footerContent: '&copy; 2015-2019 Guang Shi | All rights reserved | Built with <a href="https://bulma.io/"><strong>Bulma</strong></a> and <a href="https://nuxtjs.org/"><strong>Nuxt.js</strong></a>',
      iconSize: 'lg',
      socialLinks: [
      	{
      		id: 0,
	      	iconName: 'fab github',
	      	name: 'github',
	      	link: 'https://github.com/anyuzx'
      	},
      	{
      		id: 1,
      		iconName: 'fab instagram',
      		name: 'instagram',
      		link: 'https://www.instagram.com/guang_shi_stefan/'
      	},
      	{
      		id: 2,
      		iconName: 'fac google-scholar-square',
      		name: 'google scholar',
      		link: 'https://scholar.google.com/citations?user=JMf5dv8AAAAJ&hl=en'
      	},
      	{
      		id: 3,
      		iconName: 'fab wordpress-simple',
      		name: 'wordpress',
      		link: 'https://biophyenvpol.wordpress.com/'
      	},
      	{
      		id: 4,
      		iconName: 'fab researchgate',
      		name: 'researchgate',
      		link: 'https://www.researchgate.net/profile/Guang_Shi8'
      	},
      	{
      		id: 5,
      		iconName: 'fab flickr',
      		name: 'flickr',
      		link: 'https://www.flickr.com/photos/stefanshi/'
      	},
      	{
      		id: 6,
      		iconName: 'fab zhihu',
      		name: 'zhihu',
      		link: 'https://www.zhihu.com/people/stefanshi/activities'
      	},
        {
          id: 7,
          iconName: 'fab medium-m',
          name: 'medium',
          link: 'https://medium.com/@stefanshi1988'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.buttons {
	justify-content: center;
}

/*
.button {
	background-color: white;
	border: 0;
	border-radius: 10px;
}

.buttonLeft {
  overflow: hidden;
  transition: color .3s ease-in-out;
}

.buttonLeft::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: #2E4E7E;
  transition: transform .3s ease-in-out;
}

.buttonLeft:hover::before {
  transform: translateX(0);
}

.buttonLeft:hover {
	color: white;
}

.buttonLeft span {
  z-index: 1;
}
*/
</style>
