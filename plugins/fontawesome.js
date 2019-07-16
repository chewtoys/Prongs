import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTimes, faAngleDoubleDown, faEllipsisH, faShareAltSquare } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebookF, faWeibo, faTwitter, faGithub, faInstagram, faWordpressSimple, faResearchgate, faFlickr, faZhihu, faMediumM } from '@fortawesome/free-brands-svg-icons'
import { faSave, faPaperPlane, faEnvelope } from '@fortawesome/free-regular-svg-icons'

import { faGoogleScholarSquare, faGoogleScholar, faResearchGateSquare, faResearchGate } from '~/assets/customicons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faBars, faTimes, faAngleDoubleDown, faEllipsisH, faShareAltSquare, faWhatsapp, faFacebookF, faWeibo, faTwitter, faGithub, faInstagram, faWordpressSimple, faResearchgate, faFlickr, faZhihu, faMediumM, faSave, faPaperPlane, faEnvelope, faGoogleScholarSquare, faGoogleScholar, faResearchGateSquare, faResearchGate)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
