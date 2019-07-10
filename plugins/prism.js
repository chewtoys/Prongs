import Vue from 'vue'
import Prism from 'prismjs'

// inject to vue instance (client side)
//Prism.plugins.customClass.prefix('prism-')
//Vue.prototype.$Prism = Prism

// inject to context (server side)
Prism.plugins.customClass.prefix('prism-');
export default ({ app }, inject) => {
	app.Prism = Prism
}