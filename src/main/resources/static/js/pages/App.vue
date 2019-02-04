<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title>Help Desk</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/messages">Messages</v-btn>
                <v-btn flat to="/">Home</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                messages: [],
                profile: {},
            }
        }
    }
</script>