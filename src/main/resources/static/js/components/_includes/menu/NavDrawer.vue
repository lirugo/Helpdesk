<template>
    <v-navigation-drawer
            :mini-variant.sync="mini"
            enable-resize-watcher
            app
            class="grey lighten-2"
    >
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img :src="profile.userpic">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title v-text="profile.name"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-btn
                                icon
                                @click.stop="mini = !mini"
                        >
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        props: ['profile'],
        data () {
            return {
                items: [
                    { title: 'Home', icon: 'home', to: '/' },
                    { title: 'Help Desk', icon: 'dashboard', to: '/helpdesk' },
                ],
                mini: true,
            }
        }
    }
</script>