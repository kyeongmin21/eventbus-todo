<template>
  <div>
    <h1>컴포넌트 연결 / props, emit</h1>

    <ComponentButton name="parentText" @setInput="setInput">
      자식에게 받은 데이터: {{ value }}
    </ComponentButton>

  </div>
</template>

<script>
import ComponentButton from "@/components/Button";

export default {
  name: '',
  components: {
    ComponentButton,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    setInput(value, text) {
      this.value = value;
      console.log("자식 컴포넌트에게 값을 받았어요 :", value, text);
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>