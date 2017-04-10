export default {
  getUsersUnderForty(state) {
    return state.users.filter(user =>
      user.age < 40,
    );
  },
};
