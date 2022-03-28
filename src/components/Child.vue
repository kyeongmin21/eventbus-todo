<template>
  <div>
    <div>{{ this.childValue }}</div>
    <button @click="updateParentValue">
      클릭시 부모의 데이터 값이 증가합니다.
    </button>

    <div>공부{{ study }}</div>
    <button @click="changeText">버튼</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    childValue: {
      type: Number,
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      num: this.childValue,
      study:this.text
    };
  },
  methods: {
    updateParentValue() {
      this.num = 1;
      this.$emit("childEvent", this.num);
    },
    changeText() {
      this.study = '안할래'
      this.$emit('change', this.study)
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>