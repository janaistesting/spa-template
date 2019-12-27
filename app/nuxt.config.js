const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/spa-template/'
  }
} : {};

const routes = [
  'references/reference/floriandanger',
  'references/reference/juleslamy',
  'references/reference/nicolelorenzmattke',
  'references/reference/jenswihsinger',
  'references/reference/gottsleben',
];

export default {
  mode: 'universal',
  ...routerBase,
  /*
  ** Headers of the page
  */
  generate: {
    ...routes
  },
  head: {
    title: process.env.npm_package_name || '',
    script: [
      {src: 'https://smtpjs.com/v3/smtp.js'}
    ],
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["~/plugins/vuelidate.js",  { src: '~plugins/ga.js', mode: 'client' }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@bazzite/nuxt-optimized-images'
  ],

  optimizedImages: {
    optimizeImages: true
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
