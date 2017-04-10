export default {
  addUser(context, user) {
    context.commit('addUser', user);
  },
  loadApi({ commit }, joke) {
    commit('addJoke', joke);
  },
};
