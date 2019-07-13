<template>
<social-sharing :url="shareUrl"
                :title="shareTitle"
                :description="shareDescription"
                :quote="shareQuote"
                :hashtags="shareHashtag"
                :twitter-user="shareTwitterUser" inline-template>
	<div class="buttons share-button">
		<template v-for="item in $parent.items">
		  <network :network="item.name">
		  	<a class="button is-material-flat">
			    <span class="icon">
			      <font-awesome-icon :icon="[item.iconName.split(' ')[0], item.iconName.split(' ')[1]]" :size="$parent.iconSize"/>
			    </span>
			   </a>
		  </network>
		</template>
	</div>
</social-sharing>
</template>

<script>
export default {
	data () {
		return {
			iconSize: 'lg',
			items: [
				{
					id: 0,
					name: "twitter",
					iconName: 'fab twitter',
				},
				{
					id: 1,
					name: "facebook",
					iconName: 'fab facebook-f'
				},
				{
					id: 2,
					name: "weibo",
					iconName: 'fab weibo',
				},
				{
					id: 3,
					name: "whatsapp",
					iconName: 'fab whatsapp',
				}
			]
		}
	},
	props: {
		shareUrl: String,
		shareTitle: String,
		shareDescription: String,
		shareQuote: String,
		shareHashtag: String,
		shareTwitterUser: String
	}
}
</script>

<style lang='scss' scoped>
.buttons.share-button /deep/ .button {
  border-radius: 100%;
}
</style>