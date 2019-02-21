
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        snackbar: {
            show: false,
            color: '',
            timeout: 6000,
            text: 'Hello, I\'m a snackbar'
        },
        helpDeskTasks: [],
    },
    getters: {
        sortedHelpDeskTasks: state => state.helpDeskTasks.sort((a,b) => -(a.id -b.id))
    },
    mutations: {
        setSnackbarMutation(state, snackbar) {
            state.snackbar = [
                ...state.snackbar,
                snackbar
            ]
        },
        getHelpDeskTasksMutation(state, helpDeskTasks) {
            state.helpDeskTasks = helpDeskTasks
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
        }
    }

})