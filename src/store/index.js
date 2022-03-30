import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      id: null,
      displayName: null,
      email: null,
      authToken: null,
    },
  },
  mutations: {
    setUser(state, data) {
      state.user.id = data.userid;
      state.user.displayName = data.username;
      state.user.email = data.email;
      state.user.authToken = data.authToken;
    },
  },
});
