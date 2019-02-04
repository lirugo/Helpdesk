<template>
    <div>
        <message-form :messages="messages"/>
        <message-row v-for="message in sortedMessages"
                     :key="message.id"
                     :message="message"/>
    </div>
</template>

<script>
    import MessageRow from "components/messages/MessageRow.vue"
    import MessageForm from "components/messages/MessageForm.vue"

    export default {
        components: {
            MessageRow,
            MessageForm,
        },
        props: ['messages'],
        data(){
            return {
                message: null
            }
        },
        computed: {
            sortedMessages() {
                return this.messages.sort((a, b) => -(a.id - b.id))
            }
        },
        methods: {
            editMethod(message){
                this.message = message
            }
        }
    }
</script>