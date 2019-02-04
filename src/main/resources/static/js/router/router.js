import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/Home.vue'
import MessagesList from 'components/messages/MessagesList.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/', component: Home },
    { path: '/messages', component: MessagesList },
]

export default new VueRouter({
    routes
})