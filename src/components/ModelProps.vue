<template>
  <div>
    <p >v-model로 전달받은 props확인하기</p>
    <p>{{value}}</p>
  </div>
</template>

<script>
export default {
  name: "ModelProps",
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {

    }
  },
  methods: {
  },
};
</script>

<style>
@import "/css/style.css";
</style>