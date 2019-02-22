import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/Home.vue'
import MessagesList from 'components/messages/MessagesList.vue'
import UserList from 'components/user/UserList.vue'
import HelpDesk from 'components/helpdesk/HelpDesk.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/', component: Home },
    { path: '/users', component: UserList },
    { path: '/messages', component: MessagesList },
    { path: '/helpdesk', component: HelpDesk },
]

export default new VueRouter({
    mode: 'history',
    routes
})