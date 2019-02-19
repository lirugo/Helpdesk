<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card
                    :color="cardColor">
                <v-card-text class="pb-0">
                    <v-container grid-list-md pb-0>
                        <span class="headline justify-center">Create new appeal to Help Desk</span>
                        <v-layout wrap>
                            <!--Title-->
                            <v-flex xs12>
                                <v-text-field label="Title" required
                                              hint="Write title for your problem"
                                              counter="100"
                                ></v-text-field>
                            </v-flex>
                            <!--Description-->
                            <v-flex xs12>
                                <v-textarea
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
                                        :items="['Low', 'Medium', 'High']"
                                        label="Priority"
                                        name="priority"
                                        required
                                ></v-select>
                            </v-flex>
                            <!--Problem with-->
                            <v-flex xs12 sm4>
                                <v-select
                                        :items="['PC', 'Printer', 'Phone', 'Network', 'WI-FI']"
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
                                            v-model="desire_date_of_completion"
                                            label="Desired date of completion"
                                            readonly
                                    ></v-text-field>
                                    <v-date-picker
                                            v-model="desire_date_of_completion"
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
                    <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        props: ['openCreateTaskDialog'],
        watch: {
            openCreateTaskDialog(){
                this.dialog = this.openCreateTaskDialog
            }
        },
        data: function() {
            return {
                dialog: this.openCreateTaskDialog,
                desire_date_of_completion: new Date().toISOString().substr(0, 10),
                showDatePicker: false,
                task: {
                    priority: '',
                },
                cardColor: 'white',
            };
        },
        watch:{
            task: {
                handler: function() {
                    if(this.task.priority === 'Low')
                        this.cardColor = 'white'
                    if(this.task.priority === 'Medium')
                        this.cardColor = 'orange lighten-2'
                    if(this.task.priority === 'High')
                        this.cardColor = 'deep-orange lighten-2'
                },
                deep: true
            }
        }
    }
</script>