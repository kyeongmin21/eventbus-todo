<template>
  <div>
    <v-textarea
      solo
      v-model="memo"
      label="투두 리스트를 입력해주세요"
    ></v-textarea>
    <v-btn @click="listAdd">리트스 추가</v-btn>
  </div>
</template>

<script>
import {eventBus} from "../main"

export default {
  name: "ListAdd",
  data() {
    return {
      memo: null
    }
  },
  created() {
    eventBus.$on('listEdit', (memo, idx) => {
      console.log(memo, idx)
    })
  },
  methods: {
    listAdd () {
      if (this.memo === null) {
        alert('할일을 입력해주세요')
      } else {
        this.$emit('listAdd', this.memo)
        this.memo = null
      }

    }
  }
}
</script>

<style scoped>

</style>
