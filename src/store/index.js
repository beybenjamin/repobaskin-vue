import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user:{
            displayName: null,
            email: null,
            authTokens: null
        }
    },
    mutations:{
        setUser (state, data){
            state.user.displayName = data.username
            state.user.email = data.email
            state.user.authToken = data.authToken
            
            console.log(state.user.authToken)
        }
    }
})