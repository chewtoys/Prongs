<template>
<section class="section">
  <div class='container'>
    <div class="columns is-centered">
      <div class="column is-two-thirds-desktop is-two-thirds-tablet">
        <h1 class="title is-1 page-title is-relative" style="display: inline-block;">Blog</h1>
        <h5 class="subtitle is-5">Research, photography, and random thoughts</h5>
        <template v-for="post in posts">
          <div class="card">
            <div class="card-header is-shadowless">
              <p class="card-header-title card-header-meta">
                {{ post.date }} &bull; {{ post.wordCount }} Words &bull; {{ post.readTime }} minutes read
              </p>
              <p class="card-header-title">
                <template v-for="tag in post.tags">
                  <span class="tag is-warning is-rounded">#{{ tag }}</span>
                </template>
              </p>
              <nuxt-link :to="'/posts/'+post.slug" class="card-header-icon" aria-label="read full article">
                <span class="icon">
                  <font-awesome-icon :icon="['fas','ellipsis-h']" />
                </span>
              </nuxt-link>
            </div>
            <div class="card-header is-shadowless">
              <nuxt-link :to="'/posts/'+post.slug" aria-label="read full article">
                <h3 class="card-header-title card-header-custom">
                  {{ post.title }}
                </h3>
              </nuxt-link>
            </div>
            <div class="card-content">
              <p class="content card-content-custom">
                {{ post.excerpt }}
              </p>
            </div>
          </div>
          <hr>
        </template>
      </div>
    </div>
  </div>
</section>
</template>

<script>
function importAll(r) {
  var files = [];
  r.keys().forEach(key => (files.push(r(key))));
  return files;
};
// define a zip function to zip postPath and postRaw
var zip = (a, b) => a.map((x, i) => [x, b[i]]);

// resolve the markdown files (webpack)
var req = require.context('~/contents/posts/', true, /\.md$/);

export default {
  data: function() {
    return {
      posts: []
    }
  },
  async asyncData({ app }) {
    var postsData = [];
    const postsPath = req.keys();
    const postsRaw = importAll(req);
    for (let [postPath, postRaw] of zip(postsPath, postsRaw)) {
      let res = app.$fm(postRaw.default);
      res.attributes.date = app.$dayjs(res.attributes.date).format('MMMM DD,YYYY');
      res.attributes.excerpt = res.attributes.excerpt.slice(0, 200) + '...'; // slice first 300 characters
      var wordCount = res.body.replace(/[^\w ]/g, "").split(/\s+/).length;
      res.attributes.readTime = Math.floor(wordCount / 228) + 1; // unit of minute
      res.attributes.wordCount = wordCount
      res.attributes.slug = postPath.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, ""); // extract file name, use as slug
      postsData.push(res.attributes);
    };
    // sort the array posts according to date
    postsData.sort(function(a, b) { return app.$dayjs(b.date) - app.$dayjs(a.date) });
    // add attribute id
    postsData.map((x, idx) => x.id = idx);
    return {
      posts: postsData
    };
  },
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.css', integrity: 'sha384-yFRtMMDnQtDRO8rLpMIKrtPCD5jdktao2TV19YiZYWMDkUR5GQZR/NOVTdquEx1j', crossorigin: 'anonymous' }
      ]
    }
  },
  layout: 'default'
}

</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 2rem;
  box-shadow: none;
  transition: box-shadow .15s cubic-bezier(.4,0,.2,1);
  &:hover {
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);
  }
}

.card-header-meta {
  font-weight: 400;
  color: #546279;
  font-size: 13px;
  text-transform: uppercase;
}

.card-header-custom {
  font-size: 24px;
  font-weight: 700;
}

.card-header-icon {
  color: black;
}

.card-content {
  padding: 0;
}

.card-content-custom {
  font-size: 16px;
  padding: 12px;
}

.tag {
  margin-right: 1rem;
}

</style>
