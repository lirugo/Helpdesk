<template>
    <v-toolbar fixed app :clipped-left="false" color="grey lighten-2">
        <v-toolbar-title>Help Desk</v-toolbar-title>
        <!--Admin user-->
        <v-toolbar-items class="hidden-sm-and-down" v-if="profile">
            <v-btn flat v-if="profile.roles[0] == 'ADMIN'" to="/users">Users</v-btn>
            <v-btn flat v-if="profile.roles[0] == 'ADMIN'" to="/messages">Messages</v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>

        <!--Auth user-->
        <v-toolbar-items v-if="profile">
            <v-btn flat href="/logout"><v-icon>exit_to_app</v-icon></v-btn>
        </v-toolbar-items>

        <!--Guest user-->
        <v-toolbar-items v-else>
            <v-btn flat href="/login"><v-icon>perm_identity</v-icon></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['profile'])
        },
    }
</script>