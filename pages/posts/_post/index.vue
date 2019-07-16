<template>
<section class="section">
  <div class="columns is-centered">
    <template v-if="enableSocialShare">
      <div class="column is-1 is-hidden-mobile">
        <v-socialshare :share-url="fullUrl"
                       :share-title="post.attr.title"
                       :share-description="post.attr.excerpt"
                       :share-hashtag="(post.attr.tags).join()"
                       style="position: sticky;top: 40vh;flex-direction: column;"
        >
        </v-socialshare>
      </div>
    </template>
    <div class="column is-half-desktop is-two-thirds-tablet">
      <v-singlepost v-bind:post-title="post.attr.title" v-bind:post-date="post.attr.date" v-bind:post-read-time="post.attr.readtime" v-bind:post-body="post.content"></v-singlepost>
    </div>
    <div class="column is-1">
      <div class="is-hidden-tablet">
        <v-socialshare :share-url="fullUrl"
                       :share-title="post.attr.title"
                       :share-description="post.attr.excerpt"
                       :share-hashtag="(post.attr.tags).join()"
                       style="justify-content: center;"
        >
        </v-socialshare>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import SinglePost from '~/components/SinglePost';
import TheSocialShare from '~/components/TheSocialShare';

export default {
  components: {
    'v-singlepost': SinglePost,
    'v-socialshare': TheSocialShare
  },
  data: function () {
    return {
      enableSocialShare: true,
      fullUrl: null,
      post: {}
    }
  },
  async asyncData({ app, env, route }) {
    var postData = {};
    var fullUrlData = env.baseUrl + route.path;
    const fileContent = await import(`~/contents/posts/${route.params.post}.md`);
    let res = app.$fm(fileContent.default);
    var wordCount = res.body.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
    res.attributes.wordCount = wordCount;
    res.attributes.readtime = Math.floor(wordCount / 228) + 1;
    res.attributes.date = app.$dayjs(res.attributes.date).format('MMMM DD,YYYY');
    res.attributes.excerpt = res.attributes.excerpt.slice(0,300) + '...';
    postData.attr = res.attributes;
    postData.content = app.$markdownRenderer.render(res.body);
    return {
      post: postData,
      fullUrl: fullUrlData
    }
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css', integrity: 'sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j', crossorigin: 'anonymous' }
      ]
    }
  },
  layout: 'default',
  mounted () {
    this.$mediumZoom('.content img', { scrollOffset: 0, margin:48 });
    Prism.highlightAll(); // needed to correctly re-render copy-to-clipboard between route change
  }
};
</script>

<style lang='scss' scoped>
.buttons.share-button /deep/ .button {
  margin-right: 0.5rem;
}
</style>
