<template>
    <transition name="slide-fade">
    <v-card class="ma-2">
        <!--Title time description-->
        <v-card-title class="pb-0">
            <div>
                <h3 class="headline" v-text="task.title"></h3>
                <span class="grey--text">{{task.createdAt | moment('DD-MM-YYYY')}}</span><br>
                <span v-text="task.description"></span>
            </div>
        </v-card-title>

        <!--Author-->
        <v-card-actions>
            <v-list-tile class="grow">
                <v-list-tile-avatar color="grey darken-3">
                    <v-img
                            class="elevation-6"
                            :src="task.author.userpic"
                    ></v-img>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title v-text="task.author.name"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-card-actions>

        <!--Chips-->
        <div class="ml-3">
            <!--Status-->
            <v-chip label color="gray" outline text-color="green" v-if="task.done">
                <v-icon left>done_outline</v-icon>DONE
            </v-chip>
            <v-chip label color="gray" outline text-color="gray" v-else>
                <v-icon left>refresh</v-icon>IN PROGRESS
            </v-chip>
            <!--Priority-->
            <v-chip label color="orange darken-3" outline text-color="orange darken-3">
                <v-icon left>error</v-icon>{{task.priority}}
            </v-chip>
            <!--Device-->
            <v-chip label color="gray" outline text-color="gray">
                <v-icon left>perm_device_information</v-icon>{{task.problemWith}}
            </v-chip>
        </div>

        <!--Actions-->
        <v-card-actions>
            <v-spacer></v-spacer>
            <div v-if="$can('update', 'Help Desk Task')">
            <v-btn flat color="orange">Open</v-btn>
            <v-btn flat color="orange">Message</v-btn>
            <v-btn flat color="green">Done</v-btn>
            </div>
        </v-card-actions>
    </v-card>
    </transition>
</template>

<script>
    export default {
        props: ['task'],
    }
</script>

<style>
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    {
        transform: translateX(10px);
        opacity: 0;
    }
</style>