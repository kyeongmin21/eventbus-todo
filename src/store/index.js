import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    chatList: [
      { id: 1, lastMessage: '채팅메세지1', new: 1},
      { id: 2, lastMessage: '채팅메세지2', new: 2},
      { id: 3, lastMessage: '채팅메세지3', new: 1},
      { id: 4, lastMessage: '채팅메세지4', new: 5}
    ]
  },
  mutations: {
    readChat(state, chat) {
      state.chatList.forEach(item => {
        if (item.id === chat.id) {
          item.new = 0
        }
      })
    }
  },
  actions: {
    readChat(context, chat) {
      context.commit('readChat', chat)
    }
  },
  modules: {
  }
})
