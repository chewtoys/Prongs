// glob is a small module to read 'globs', useful to get
// a filtered file list
const glob = require('glob');
// we acquire an array containing the filenames
// in the articles directory
let files = glob.sync( '**/*.md' , { cwd: 'contents/posts' });

// We define a function to trim the '.md' from the filename
// and return the correct path.
// This function will be used later
function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/posts/${slug}`;
}

var path = require('path');

require('dotenv').config();

export default {
  mode: 'universal',
  /*
   ** Environment variables
   */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    siteTitle: 'Guang Shi',
    siteDescription: 'Personal website. Research, Blog, and Photography...',
    siteTitleSeparator: '|',
    wordsPerMinute: 200
  },
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [{ rel: "apple-touch-icon", sizes: "180x180", href: '/favicon/apple-touch-icon.png' },
           { rel: "icon", type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
           { rel: "icon", type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
           { rel: "manifest", href: "/favicon/site.webmanifest" },
           { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: '#5bbad5'},
           { rel: "shortcut icon", href: "/favicon/favicon.ico" },
           { rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i&display=swap' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#4C8DAE' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/fonts/FiraCode/fira_code.css',
    '~/assets/prism-atom-dark.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/fontawesome.js' },
    { src: '~/plugins/mediumzoom.js' },
    { src: '~/plugins/day.js' },
    { src: '~/plugins/customMarkdownRenderer.js' },
    { src: '~/plugins/lazyload.js' },
    { src: '~/plugins/socialshare.js' }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    // enable correct anchor link behavior
    'vue-scrollto/nuxt',
    // enable markdown
    //'@nuxtjs/markdownit',
    // enable scss variable accessible in every vue single file component
    '@nuxtjs/style-resources'
    // purge css
    //'nuxt-purgecss',
    //'nuxt-compress',
    //'@nuxtjs/dotenv'
  ],
  purgeCSS: {
    mode: 'postcss',
    whitelist: ["fixed", "default", "medium-zoom-image", "side-menu-active"],
    whitelistPatterns: [/(-|^)fa(-1|$)/, /^pre/, /^code/, /^blockquote$/, /^prism-/],
    whitelistPatternsChildren: [/^pre/, /^code/, /^blockquote$/]
  },
  /* 
   ** specify variable/function/mixin file
   ** the variables/function/mixin will be in the global scope, available for every component, pages, etc
  */
  styleResources: {
    scss: [
      '~/node_modules/bulma/sass/utilities/initial-variables.sass',
      '~/assets/custom-variable.scss'
    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: ['raw-loader'],
          include: path.resolve(__dirname, 'content')
        }
      );
      config.node = {
        fs: 'empty'
      };
    },
    /* temporarily fix layout leaking bug */
    splitChunks: {
      layouts: true
    },
    /*
    config babel
    */
    babel: {
      plugins: [
        ["prismjs", {
        "languages": ["markup", "javascript", "python", "c", "cpp", "bash", "latex"],
        "plugins": ["custom-class", "copy-to-clipboard"]
        }]
      ]
    }
  },
  /*enable vue.js devtool*/
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  /*
  ** enable blog page generation
  */
  generate: {
    routes: function() {
      return files.map(getSlugs)
    }
  }
}
