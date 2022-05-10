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
export default {
  name: "ListAdd",
  data() {
    return {
      memo: null
    }
  },
  methods: {
    listAdd () {
      if (this.memo === null) {
        alert('할일을 입력해주세요')
      } else {
        this.$emit('listAdd', this.memo)
      }

    }
  }
}
</script>

<style scoped>

</style>
