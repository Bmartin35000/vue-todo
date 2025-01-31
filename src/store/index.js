import { createStore } from 'vuex'
export default createStore({
  state: {
    day: 21,
    month: 4,
    year: 2025
  },
  getters: {
    date(state){
      return state.day + "/"+ state.month +"/"+state.year
    }
  },
  mutations: {
    incrementDay(state){
      state.day+=1
    },
    resetDay(state){
      state.day=0
    }
  },
  actions: {
    incrementDay(context){
      if(context.state.day===31){
        context.commit("resetDay")
      }
      context.commit('incrementDay')
    }
  },
  modules: {
  },
})
