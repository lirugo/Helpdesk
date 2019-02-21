
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        helpDeskTasks: [],
    },
    getters: {
        sortedHelpDeskTasks: state => state.helpDeskTasks.sort((a,b) => -(a.id -b.id))
    },
    mutations: {
        getHelpDeskTasksMutation(state, helpDeskTasks) {
            state.helpDeskTasks = helpDeskTasks
        },
        addHelpDeskTaskMutation(state, helpDeskTask) {
            state.helpDeskTasks = [
                ...state.helpDeskTasks,
                helpDeskTask
            ]
        }
    },
    actions: {
        getHelpDeskTasksAction({ commit }){
            return new Promise((resolve, reject) => {
                Vue.http.get("/api/helpdesk/")
                    .then((response) => {
                        commit("getHelpDeskTasksMutation", response.body);
                    })
                    .catch((error => {
                        console.log(error.statusText);
                    }));
            });
        },
        addHelpDeskTaskAction({ commit }, helpDeskTask) {
            return new Promise((resolve, reject) => {
                Vue.http.post("/api/helpdesk/", helpDeskTask)
                    .then((response) => {
                        commit("addHelpDeskTaskMutation", response.body)
                    })
                    .catch((error => {
                        console.log(error.statusText);
                    }));
            });
        }
    }

})