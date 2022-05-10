<template>
  <div>
    <v-textarea
      solo
      v-model="memo"
      label="투두 리스트를 입력해주세요"
    ></v-textarea>
    <v-btn v-if="mode === 'add'" @click="listAdd">리트스 추가</v-btn>
    <v-btn v-else @click="listEdit">리트스 수정</v-btn>
  </div>
</template>

<script>
import {eventBus} from "../main"

export default {
  name: "ListAdd",
  data() {
    return {
      memo: null,
      index: null,
      mode: 'add'
    }
  },
  created() {
    eventBus.$on('listEdit', (memo, idx) => {
      this.memo = memo
      this.index = idx
      this.mode = 'edit'
    })
  },
  methods: {
    listAdd() {
      if (this.memo === null) {
        alert('할일을 입력해주세요')
      } else {
        this.$emit('listAdd', this.memo)
        this.memo = null
      }
    },
    listEdit() {
      if (this.memo === null) {
        alert('할일을 입력해주세요')
      } else {
        this.$emit('listEdit', this.memo, this.index)
        this.memo = null
        this.mode = 'add'
      }
    }
  }
}
</script>
