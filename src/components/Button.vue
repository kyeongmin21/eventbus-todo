<template>
  <div>
    <button @click="onClick()">{{ btn }}</button><br>

    <input type="text" v-model="value"/>
    <button @click="onEmit">{{ name }} : 부모 전달값 버튼</button>
  </div>
</template>

<script>
export default {
  name: "ComponentButton",
  props: {
    // 먼저 아래와 같이 props로 받은 정보가 어떤 자료형인지 정의합니다.
    // 정의한 경우 정의된 자료형과 다른 자료형의 데이터가 들어오면 warning을 console에 띄웁니다.
    name: String,
  },
  data() {
    return {
      btn: "공통 버튼 클릭",
      value: "",
    };
  },
  components: {},
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