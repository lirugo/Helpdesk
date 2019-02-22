<template>
    <v-layout row wrap>
        <!--Pagination-->
        <v-flex xs12>
            <v-pagination
                    v-model="pagination.page"
                    :length="pagination.totalPages"
            >
            </v-pagination>
            <span class="grey--text mb-2" v-text="pagination.totalElements + ' records'"></span>
        </v-flex>
        <!--Help Desk list of cards-->
        <v-flex xs12 sm12 md6 lg4
                v-for="task in sortedHelpDeskTasksGetter" :key="task.id">
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
    import { mapActions } from 'vuex'

    export default {
        components: {
            HelpDeskCreateTask,
            HelpDeskCard,
        },
        computed: {
            ...mapGetters(['sortedHelpDeskTasksGetter', 'helpDeskPaginationGetter']),
        },
        data: () => ({
            openCreateTaskDialog: false,
            pagination: {
                page: 1,
                totalPages: 1
            }
        }),
        watch: {
            'pagination.page': {
                handler: function() {
                    this.getHelpDeskTask()
                },
                deep: true
            }
        },
        created(){
            this.pagination = this.helpDeskPaginationGetter
        },
        methods: {
            ...mapActions(['getHelpDeskTasksAction']),
            getHelpDeskTask(){
                this.getHelpDeskTasksAction(this.pagination.page - 1)
                this.pagination = this.helpDeskPaginationGetter
            }
        }
    }
</script>