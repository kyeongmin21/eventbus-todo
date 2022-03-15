<template>
  <div>
    <div>{{ this.childValue }}</div>
    <button @click="updateParentValue">
      클릭시 부모의 데이터 값이 증가합니다.
    </button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    childValue: {
      type: Number,
    },
  },
  data() {
    return {
      lll: this.childValue,
    };
  },
  methods: {
    updateParentValue() {
      this.lll = 1;
      this.$emit("childEvent", this.lll);
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>