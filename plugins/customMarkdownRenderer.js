// import Vue
import Vue from 'vue'
// import prismjs
import Prism from 'prismjs'
Prism.plugins.customClass.prefix('prism-')

// config markdown-it
var markdownRenderer = require("markdown-it")({
  html: true,
  typographer: true,
  linkify: true,
  highlight: function (str, lang) {
    var languageString = 'language-' + lang;
    if (Prism.languages[lang]) {
      return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + Prism.highlight(str, Prism.languages[lang], lang) + '</code></pre>';
    } else {
      return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' + Prism.util.encode(str) + '</code></pre>';
    }
  }
});

markdownRenderer.use(require('markdown-it-footnote'));
markdownRenderer.use(require('@iktakahiro/markdown-it-katex'), {"throwOnError" : false, "errorColor" : " #cc0000"});
markdownRenderer.use(require('markdown-it-container'), 'notification');

// import front-matter
const fm = require("front-matter")

export default ({ app }, inject) => {
  app.$fm = fm;
  app.$markdownRenderer = markdownRenderer;
}