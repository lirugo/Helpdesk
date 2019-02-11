<template>
    <v-app>
        <v-toolbar app>
            <v-toolbar-title>Help Desk</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat to="/users">Users</v-btn>
                <v-btn flat v-if="profile" to="/messages">Messages</v-btn>
                <v-btn flat to="/">Home</v-btn>

                <v-btn flat href="/login" v-if="!profile">Sign in</v-btn>
                <v-btn flat v-else><a href="/logout">Sign out</a></v-btn>
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
                profile: frontendData.profile,
            }
        }
    }
</script>