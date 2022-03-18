<template>
  <div>
    <h1>컴포넌트 연결 / props, emit</h1>

    <ComponentButton print="parentText" @setInput="setInput">
      자식에게 받은 데이터: {{ value }}
    </ComponentButton>

  </div>
</template>

<script>
import ComponentButton from "@/components/Button";

export default {
  name: 'Compo',
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
      this.text = text;
      console.log("자식 컴포넌트게 값을 받음:", value, text);
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>