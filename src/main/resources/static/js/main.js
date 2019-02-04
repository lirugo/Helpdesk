
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from 'pages/App.vue'

Vue.use(VueResource)

new Vue({
    el: '#app',
    render: a => a(App)
})


// var messageAPI = Vue.resource('/messages{/id}')
//
// Vue.component('message-form', {
//     props: ['messages'],
//     data: function(){
//         return {
//             text: ''
//         }
//     },
//     template:
//         '<div>' +
//             '<input type="text" placeholder="Write msg" v-model="text"/>' +
//             '<input type="button" @click="save" value="Send"/>' +
//         '</div>',
//     methods: {
//         save: function(){
//             var message = { text: this.text }
//
//             messageAPI.save({}, message).then(result =>
//                 result.json().then(data => {
//                     this.messages.push(data)
//                     this.text = ''
//                 }))
//         }
//     }
// })