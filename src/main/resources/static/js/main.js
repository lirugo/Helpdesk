
var messageAPI = Vue.resource('/messages{/id}')

Vue.component('message-form', {
    props: ['messages'],
    data: function(){
        return {
            text: ''
        }
    },
    template:
        '<div>' +
            '<input type="text" placeholder="Write msg" v-model="text"/>' +
            '<input type="button" @click="save" value="Send"/>' +
        '</div>',
    methods: {
        save: function(){
            var message = { text: this.text }

            messageAPI.save({}, message).then(result =>
                result.json().then(data => {
                    this.messages.push(data)
                    this.text = ''
                }))
        }
    }
})
Vue.component('message-row', {
    props: ['message'],
    template:
        '<div>' +
            '<i>' +
            '({{message.id}}) - {{message.text}}' +
            '</i>' +
            '<span>' +
            '<input type="button" value="Edit" @click="edit"/>' +
            '</span>' +
        '</div>',
    methods: {
        edit: function () {

        }
    }
})
Vue.component('message-list', {
    props: ['messages'],
    created: function(){
        messageAPI.get().then(result =>
            result.json().then(data =>
            data.forEach(message => this.messages.push(message)))
        )
    },
    template:
        '<div>'+
        '<message-form :messages="messages"/>' +
        '<ul>'+
        '<message-row v-for="message in messages" :key="message.id" :message="message"/>' +
        '</ul>' +
        '</div>'
})

var app = new Vue({
    el: '#app',
    template: '<message-list :messages="messages"/>',
    data: {
        messages: []
    }
})