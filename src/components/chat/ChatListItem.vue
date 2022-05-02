<template>
  <div>
    <button type="button" @click="itemClick"
            class="list-group-item text-left d-flex justify-content-between aligin-items-center">
      {{ chat.lastMessage }}
      <span class="badge badge-primary badge-pill">{{ chat.new }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ChatListItem",
  props: ['chat'],
  methods: {
    itemClick() {
      this.$store.dispatch('readChat', {...this.chat})
    }
  }
}
</script>
