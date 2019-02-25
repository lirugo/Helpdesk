
import Vue from 'vue'
import Vuetify from 'vuetify'
import '@babel/polyfill'
import store from 'store/store'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'
import 'vuetify/dist/vuetify.min.css'
import router from 'router/router'
import { abilitiesPlugin } from '@casl/vue'

Vue.use(abilitiesPlugin)
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(require('vue-moment'))

new Vue({
    el: '#app',
    router,
    store,
    render: a => a(App),
})