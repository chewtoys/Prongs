<template>
<div class="content has-text-justified">
  <h1 class="is-post-title" v-if="showTitle">{{postTitle}}</h1>
  <p class="is-post-meta" v-if="showMeta">{{postDate}}<br>{{postReadTime}} minutes read</p>
  <hr class="is-title-divider" v-if="showDivider">
  <div class="is-post-body" v-if="showBody" v-html="postBody"></div>
</div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    postTitle: String,
    postDate: String,
    postBody: String,
    postReadTime: String,
    showTitle: {
      type: Boolean,
      default: true
    },
    showMeta: {
      type: Boolean,
      default: true
    },
    showDivider: {
      type: Boolean,
      default: true
    },
    showBody: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    //this.$mediumZoom('.content img', { scrollOffset: 0, margin:48 });
  }
}
</script>