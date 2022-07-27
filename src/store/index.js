import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
        name: '',
        email: '',
        phone: ''
    };
  },
  getters: {
    name(state) {
        return state.name
    },
    email(state) {
        return state.email
    },
    number(state) {
        return state.phone
    },
  },
  actions: {
    userInfo(context, payload) {
        context.commit("setInfo" ,payload)
    }
  },
  mutations: {
    setInfo(state, payload) {
        state.name = payload.name
        state.email = payload.email
        state.phone = payload.number
    }
  },
});

export default store;
 