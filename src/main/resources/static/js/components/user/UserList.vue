<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-list>
                    <v-list-tile
                            v-for="user in users"
                            :key="user.id"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="user.userpic">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title v-text="user.name"></v-list-tile-title>
                            <v-list-tile-sub-title v-for="(role, index) in user.roles" v-text="role + ' last visit ' + user.lastVisit" :key="index"></v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data(){
            return {
                users: []
            }
        },
        created(){
            this.$resource('/api/users').get()
                .then(res =>
                    res.json().then(
                        data => this.users = data
                    ))
        }
    }
</script>