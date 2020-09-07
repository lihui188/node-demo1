import Vue from "vue"
import Vuex from "vuex"
import { Types } from "mongoose"

Vue.use(Vuex)
const type = {
  SET_AUTHENTICATED:'SET_AUTHENTICATED',
  SET_USER:'SET_USER'
}
const state = {
  isAuthenticated:false,
  user:{}
}
const getters = {
  isAuthenticated:state => state.isAuthenticated,
  user: state=>state.user
}
const mutations = {
  [type.SET_AUTHENTICATED](state,isAuthenticated){
    if(isAuthenticated) state.isAuthenticated = isAuthenticated;
    else state.isAuthenticated = false;
  },
  [type.SET_USER](state,user){
    if(user) state.user = user;
    else state.user = {};
  }
}
const actions = {
  setAuthenticated:({commit},isAuthenticated)=>{
    commit(type.SET_AUTHENTICATED,isAuthenticated)
  },
  setUser:({commit},user)=>{
    commit(type.SET_USER,user);
  }
}
const modules = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
})
