<template>
  <div>
    <Header :new-message-count="newMessageCount"/>
    <div class="container mx-auto mt-5"></div>
    <ChatList :chat-list="chatList" @read-item="readChatItem"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/chat/Header'
import ChatList from '@/components/chat/ChatList'

export default {
  name: "Chat",
  components: {
    Header,
    ChatList
  },
  computed: {
    newMessageCount () {
      return this.chatList.map(item => item.new).reduce((a, b) => a + b)
    },
    // spread 스프레드 연산자 배열,json 합쳐줌
    ...mapState({
      chatList(state) {
        return state.chatList.filter(chat => chat.new >= 1)
      }
    })
  },
  methods: {
    readChatItem(chatItem) {
      this.chatList.filter(item => item.id === chatItem.id)[0].new = 0
    }
  }
}
</script>
