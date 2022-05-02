import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatList: [
      { id: 1, lastMessage: '채팅메세지1', new: 1},
      { id: 2, lastMessage: '채팅메세지2', new: 2},
      { id: 3, lastMessage: '채팅메세지3', new: 1},
      { id: 4, lastMessage: '채팅메세지4', new: 5},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
