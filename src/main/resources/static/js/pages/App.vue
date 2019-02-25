<template>
    <v-app>
        <nav-drawer v-if="profile" :profile="profile"></nav-drawer>

        <v-toolbar fixed app :clipped-left="false">
            <v-toolbar-title>Help Desk</v-toolbar-title>
            <!--Admin user-->
            <v-toolbar-items class="hidden-sm-and-down" v-if="profile">
                <v-btn flat v-if="profile.roles[0] == 'ADMIN'" to="/users">Users</v-btn>
                <v-btn flat v-if="profile.roles[0] == 'ADMIN'" to="/messages">Messages</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>

            <!--Auth user-->
            <v-toolbar-items v-if="profile">
                <v-btn flat href="/logout">Sign out</v-btn>
            </v-toolbar-items>

            <!--Guest user-->
            <v-toolbar-items v-else>
                <v-btn flat href="/login">Sign in</v-btn>
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
    import NavDrawer from 'components/_includes/menu/NavDrawer.vue'
    import { mapActions } from "vuex"
    import { mapState } from 'vuex'
    import { defineAbilityFor } from 'ability/ability'

    export default {
        components: {
            NavDrawer,
        },
        methods: {
            ...mapActions(['getHelpDeskTasksAction']),
        },
        computed: {
            ...mapState(['profile'])
        },
        created(){
            //If user sign in
            if(this.profile) {
                //Go to api and get help desk task
                this.$store.dispatch('getHelpDeskTasksAction')
                //Update CASL
                this.$ability.update(
                    defineAbilityFor(this.profile.roles[0]).rules
                )
            }
        }
    }
</script>