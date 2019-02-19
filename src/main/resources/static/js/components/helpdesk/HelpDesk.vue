<template>
    <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4>
            <v-card>
                <!--Title and Desc-->
                <v-card-title class="pb-0">
                    <div>
                        <h3 class="headline">Cant run my PC</h3>
                        <span class="grey--text">Few min ago</span><br>
                        <span>Today i come at my work place and my PC doesnt work Beach</span>
                    </div>
                </v-card-title>

                <!--Author-->
                <v-card-actions>
                    <v-list-tile class="grow">
                        <v-list-tile-avatar color="grey darken-3">
                            <v-img
                                    class="elevation-6"
                                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Evan You</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-card-actions>

                <!--Chips-->
                <div class="ml-3">
                    <!--<v-chip label color="orange" outline text-color="orange">-->
                        <!--<v-icon left>error</v-icon>LOW-->
                    <!--</v-chip>-->
                    <v-chip label color="orange darken-3" outline text-color="orange darken-3">
                        <v-icon left>error</v-icon>MEDIUM
                    </v-chip>
                    <!--<v-chip label color="red" outline text-color="red">-->
                        <!--<v-icon left>error</v-icon>HIGH-->
                    <!--</v-chip>-->
                    <v-chip label color="gray" outline text-color="gray">
                        <v-icon left>perm_device_information</v-icon>PC
                    </v-chip>
                </div>

                <!--Actions-->
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn flat color="orange">Open</v-btn>
                    <v-btn flat color="orange">Message</v-btn>
                    <v-btn flat color="green">Done</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>


        <!--Create task form-->
        <help-desk-create-task :openCreateTaskDialog="openCreateTaskDialog"/>

        <!--Create button-->
        <v-btn
                fixed
                dark
                fab
                right
                bottom
                color="green"
                slot="activator"
                @click="openCreateTaskDialog = !openCreateTaskDialog"
        >
            <v-icon>add</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
    import HelpDeskCreateTask from 'components/helpdesk/HelpDeskCreateTask.vue'

    export default {
        components: {
            HelpDeskCreateTask,
        },
        mounted() {
            console.log('Help Desk mounted')
        },
        data: () => ({
            openCreateTaskDialog: true
        })
    }
</script>