import Vue from 'vue';
import Vuex from 'vuex';
import channels from './modules/channels/index';
import options from './modules/options/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    channels,
    options,
  },
  state: {
  },
  mutations: {
  },
  actions: {

  },
});
