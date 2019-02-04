<template>
    <div>
        <messages-list :messages="messages"></messages-list>
    </div>
</template>

<script>
    import MessagesList from 'components/messages/MessagesList.vue'

    export default {
        components: {
            MessagesList
        },
        created(){
            this.$resource('/messages').get()
                .then(res =>
                    res.json().then(
                        data => this.messages = data
                    ))
        },
        data() {
            return {
                messages: [],
                profile: {},
            }
        }
    }
</script>