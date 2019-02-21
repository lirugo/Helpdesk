<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card
                    :color="cardColor">
                <v-card-text class="pb-0">
                    <v-container grid-list-md pb-0>
                        <v-layout wrap>
                            <span class="headline">Create new appeal to Help Desk</span>
                            <!--Title-->
                            <v-flex xs12>
                                <v-text-field label="Title" required
                                              v-model="task.title"
                                              name="title"
                                              hint="Write title for your problem"
                                              counter="100"
                                ></v-text-field>
                            </v-flex>
                            <!--Description-->
                            <v-flex xs12>
                                <v-textarea
                                        v-model="task.description"
                                        name="description"
                                        label="Description"
                                        hint="Describe your problem completely"
                                        auto-grow
                                        rows="1"
                                        counter="500"
                                ></v-textarea>
                            </v-flex>
                            <!--Priority-->
                            <v-flex xs12 sm4>
                                <v-select
                                        v-model="task.priority"
                                        :items="priority"
                                        item-value="id"
                                        item-text="name"
                                        label="Priority"
                                        name="priority"
                                        required
                                ></v-select>
                            </v-flex>
                            <!--Problem with-->
                            <v-flex xs12 sm4>
                                <v-select
                                        v-model="task.problemWith"
                                        :items="problemDevices"
                                        item-value="id"
                                        item-text="name"
                                        label="Problem with"
                                        name="problem_with"
                                        required
                                ></v-select>
                            </v-flex>
                            <!--Desire date of completion-->
                            <v-flex xs12 sm4>
                                <v-menu
                                        v-model="showDatePicker"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        lazy
                                        transition="scale-transition"
                                        offset-y
                                        full-width
                                        min-width="290px"
                                >
                                    <v-text-field
                                            slot="activator"
                                            :value="dateCompletionFormatted"
                                            label="Desired date of execution"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker
                                            v-model="task.desireDateOfExecution"
                                            @input="showDatePicker = !showDatePicker"
                                    ></v-date-picker>
                                </v-menu>
                            </v-flex>
                            <small>All fields is required</small>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click="store">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    import moment from 'moment'
    import {mapMutations} from 'vuex'

    export default {
        props: ['openCreateTaskDialog'],
        data: function() {
            return {
                dialog: this.openCreateTaskDialog,
                showDatePicker: false,
                problemDevices: [
                    { id: 0, name: 'PC' },
                    { id: 1, name: 'Printer' },
                    { id: 2, name: 'Phone' },
                    { id: 3, name: 'Ethernet' },
                    { id: 4, name: 'Wi-Fi' },
                ],
                priority: [
                    { id: 0, name: 'Low' },
                    { id: 1, name: 'Medium' },
                    { id: 2, name: 'High' },
                ],
                task: {
                    title: '',
                    description: '',
                    priority: '',
                    problemWith: '',
                    desireDateOfExecution: new Date().toISOString().substr(0, 10),
                },
                cardColor: 'white',
            };
        },
        watch: {
            openCreateTaskDialog(){
                this.dialog = this.openCreateTaskDialog
            },
        },
        computed: {
            dateCompletionFormatted() {
                return this.task.desireDateOfExecution ? moment(this.task.desireDateOfExecution).format('DD-MM-YYYY') : ''
            },
        },
        methods: {
            store(){
                this.$resource('/api/helpdesk/store').save({}, this.task)
                    .then(res => {
                        console.log(res)
                    })
                    .finally(() => {
                        this.dialog = false
                    })

            }
        }
    }
</script>