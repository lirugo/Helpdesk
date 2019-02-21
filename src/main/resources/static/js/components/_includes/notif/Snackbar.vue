<template>
    <v-snackbar
            v-model="show"
            :color="color"
            :timeout="timeout"
            left
    >
        {{ text }}
        <v-btn
                dark
                flat
                @click="snackbar = false"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        data () {
            return {
                show: this.$store.state.snackbar.show,
                color: this.$store.state.snackbar.color,
                timeout: this.$store.state.snackbar.timeout,
                text: this.$store.state.snackbar.text,
            }
        },
    }
</script>