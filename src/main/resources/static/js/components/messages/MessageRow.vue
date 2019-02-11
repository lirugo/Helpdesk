<template>
    <div>
        <i>
            ({{message.id}}) - {{message.text}}
            | from {{message.author.name}} ({{message.creationDate}})
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