<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                        aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">Home page</h3>
                        <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
                        <div class="orange--text" v-if="profile">Hie - {{profile.name}} | Your role is {{profile.roles[0]}}</div>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        data(){
            return {
                profile: frontendData.profile
            }
        }
    }
</script>