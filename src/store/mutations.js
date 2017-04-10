import axios from 'axios';

export default {
  addUser(state, user) {
    const newUser = {
      name: user,
      age: 27,
    };

    state.users.push(newUser);
  },
  addJoke(state) {
    axios.get('https://api.icndb.com/jokes/random?firstName=Chuck').then((response) => {
      state.joke.push(response.value.joke);
    });
  },
};
