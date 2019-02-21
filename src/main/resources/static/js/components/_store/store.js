
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
        }
    },
    mutations: {
        setSnackbarMutation(state, snackbar) {
            state.snackbar = [
                ...state.snackbar,
                snackbar
            ]
        }
    },
    actions: {
    }

})