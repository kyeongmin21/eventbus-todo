<template>
  <div class="props">
    <h1>컴포넌트 연결하기</h1>

    <section class="first">
      <ComponentButton name="Compo" @setInput="setInput">
        자식에게 받은 데이터: {{ value }}
      </ComponentButton>
    </section>
  </div>
</template>

<script>
import ComponentButton from "../components/Button";
export default {
  name: "Compo",
  components: {
    ComponentButton,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    setInput(value) {
      this.value = value;
      console.log("자식 컴포넌트에게 값을 받았어요 :", value);
    },
  },
};
</script>

<style>

</style>