<template>
    <v-layout row wrap>
        <!--Help Desk list of cards-->
        <v-flex xs12 sm12 md6 lg4
                v-for="task in sortedHelpDeskTasks" :key="task.id">
            <!--Help Desc Card-->
            <help-desk-card :task="task"/>
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
    import HelpDeskCard from 'components/helpdesk/HelpDeskCard.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            HelpDeskCreateTask,
            HelpDeskCard,
        },
        created(){
            this.$resource('/api/helpdesk/').get()
                .then(res =>
                    res.json().then(
                        data => this.tasks = data
                    ))
        },
        computed: {
            ...mapGetters(['sortedHelpDeskTasks']),
        },
        data: () => ({
            openCreateTaskDialog: false,
            tasks: [],
        })
    }
</script>