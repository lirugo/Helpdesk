<template>
    <v-app class="grey lighten-3">
        <nav-drawer v-if="profile" :profile="profile"></nav-drawer>

        <toolbar/>

        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import NavDrawer from 'components/_includes/menu/NavDrawer.vue'
    import Toolbar from 'components/_includes/menu/Toolbar.vue'
    import { mapActions } from "vuex"
    import { mapState } from 'vuex'
    import { defineAbilityFor } from 'ability/ability'

    export default {
        components: {
            NavDrawer,
            Toolbar,
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