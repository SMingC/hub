import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Initial State
const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === true;

const state = {
  isDarkMode: false,
};

// Getters
const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  },
};

// Mutations
const mutations = {
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode;
    window.localStorage.setItem("isDarkMode", state.isDarkMode);
  },
};

// Actions
const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
