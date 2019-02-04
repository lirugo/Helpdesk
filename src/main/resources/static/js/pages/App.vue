<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title>Help Desk</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <messages-list :messages="messages"></messages-list>
            </v-container>
        </v-content>
    </v-app>
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