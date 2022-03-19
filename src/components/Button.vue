<template>
  <div>
    <button @click="onClick()">{{ btn }}</button><br>
    <p>{{ title }}</p>
    <input type="text" v-model="value"/>
    <button @click="onEmit">{{ print }} : 부모 전달값 버튼</button>
  </div>
</template>

<script>
export default {
  name: "ComponentButton",
  props: {
    title: String,
    print: String,
  },
  data() {
    return {
      btn: "공통 버튼 클릭",
      value: "",
    };
  },
  methods: {
    onClick() {
      console.log("공통버튼 클릭");
    },
    onEmit() {
      let text = "상위컴포넌트로 전달 받은 데이터";
      this.$emit("setInput", this.value, text);
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>