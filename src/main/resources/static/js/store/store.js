
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        profile: frontendData.profile,
        helpDesk: {
            tasks: [],
            pagination: {
                page: 1,
                totalPages: 1,
                totalElements: 0,
            },
        },
    },
    getters: {
        getProfileGetter: state => state.profile,
        sortedHelpDeskTasksGetter: state => state.helpDesk.tasks.sort((a,b) => -(a.id -b.id)),
        helpDeskPaginationGetter: state => state.helpDesk.pagination
    },
    mutations: {
        getHelpDeskTasksMutation(state, helpDesk) {
            state.helpDesk.tasks = helpDesk.content
            state.helpDesk.pagination.page = helpDesk.number + 1
            state.helpDesk.pagination.totalPages = helpDesk.totalPages
            state.helpDesk.pagination.totalElements = helpDesk.totalElements
        },
        addHelpDeskTaskMutation(state, helpDeskTask) {
            state.helpDesk.tasks = [
                ...state.helpDesk.tasks,
                helpDeskTask
            ]
        },
    },
    actions: {
        getHelpDeskTasksAction({ commit }, page = 0){
            return new Promise((resolve, reject) => {
                Vue.http.get("/api/helpdesk?page=" + page)
                    .then((response) => {
                        commit("getHelpDeskTasksMutation", response.body)
                        resolve()
                    })
                    .catch((error => {
                        console.log(error.statusText)
                    }))
            })
        },
        addHelpDeskTaskAction({ commit }, helpDeskTask) {
            return new Promise((resolve, reject) => {
                Vue.http.post("/api/helpdesk", helpDeskTask)
                    .then((response) => {
                        commit("addHelpDeskTaskMutation", response.body)
                    })
                    .catch((error => {
                        console.log(error.statusText)
                    }))
            })
        }
    }

})