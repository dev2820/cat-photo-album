import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    changeName(state, newName) {
      state.username = newName;
    }
  }
});
