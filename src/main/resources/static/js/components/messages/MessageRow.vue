<template>
    <div>
        <i>
            ({{message.id}}) - {{message.text}}
        </i>
    </div>
</template>

<script>
    export default {
        props: ['message'],
        methods: {
            edit: function () {

            }
        }
    }
</script>