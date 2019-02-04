<template>
    <div>
        <input type="text" placeholder="Write message" v-model="text"/>
        <input type="button" value="Send" @click="save"/>
    </div>
</template>

<script>
    export default {
        props: ['messages'],
        data(){
            return {
                text: ''
            }
        },
        methods: {
            save(){
                let message = { text: this.text }
                this.$resource('/messages').save({}, message)
                    .then(res =>
                        res.json().then(data => this.messages.push(data)))
                this.text = ''
            }
        }
    }
</script>