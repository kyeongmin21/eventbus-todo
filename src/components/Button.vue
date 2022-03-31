<template>
  <div>
    <p>{{ title }}</p>
    <input type="text" v-model="value"/>
    <button @click="onEmit">부모 전달값 버튼</button>
  </div>
</template>

<script>
export default {
  name: "ComponentButton",
  props: {
    title: {
      type: String,
      required: false  // ture면 무조건 보내줘라
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onEmit() {
      let text = "상위컴포넌트로 전달 받은 데이터";
      this.$emit("set-input", this.value, text);
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>