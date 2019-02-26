<template>
    <transition name="slide-fade">
    <v-card class="ma-2">
        <!--Chips-->
        <div class="ml-2 pt-2">
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

        <!--Title time description-->
        <v-card-title class="pb-0 pt-0">
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

        <!--Actions-->
        <v-card-actions>
            <v-btn flat icon color="grey">
                <v-icon>visibility</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <can I="update" a="Help Desk Task">
                <v-btn flat icon color="green" v-if="!task.done" @click="markAsDone()">
                    <v-icon>done</v-icon>
                </v-btn>
            </can>
        </v-card-actions>
    </v-card>
    </transition>
</template>

<script>
    export default {
        props: ['task'],
        methods: {
            markAsDone(){
                this.task.done = true
                this.$resource('/api/helpdesk/' + this.task.id).update(this.task.id, this.task)
                    .then(res => console.log(res))
            }
        }
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