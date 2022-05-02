<template>
  <div>
    <div class="list-group">
      <template v-for="chat in chatList">
        <ChatListItem :chat="chat" />
      </template>
    </div>
  </div>
</template>

<script>
import ChatListItem from "./ChatListItem"

export default {
  name: "ChatList",
  components: { ChatListItem },
  props: ['chatList'],
  methods: {}
}
</script>
