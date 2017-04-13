export default {
  namespace: 'loginForm',
  state: {
      name: '',
      password: ''
  },
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};