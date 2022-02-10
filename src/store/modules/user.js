export default {
  state: () =>({
    name:'NdekoCode',
  }),
  getters:{},
  mutations:{
    SET_NAME(state,value){
      state.name = value
    }
  },
  actions:{
    saveName({commit},data)
    {
      commit('SET_NAME',data)

    }
  }
}
