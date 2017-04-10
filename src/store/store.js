import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

// how do you get this data dynamically from an API
// change the getter to take in a dynamic value

// getters, mutations and actions are having the objects passed in
// but we only need the name as it is the same as the object ES2015 syntax
export default new Vuex.Store({
  state: {
    users: [
      { name: 'Scott', age: 40 },
      { name: 'Amy', age: 29 },
      { name: 'Kirsty', age: 38 },
      { name: 'Ed', age: 37 },
    ],
    joke: [],
  },
  getters,
  mutations,
  actions,
});
