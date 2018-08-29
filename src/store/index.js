import Vue from 'vue';
import Vuex from 'vuex';
import Gipfy from './modules/Gipfy.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Gipfy,
  },
});
