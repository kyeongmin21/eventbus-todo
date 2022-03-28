<template>
  <div>
    <div>{{ num }}</div>
    <button @click="update"> 버튼</button>
    <br><br>
    <div>{{ human }}</div>
  </div>
</template>

<script>
export default {
  name: "BoardChild",
  props: {
    num: Number,
    human: String,
  },
  data() {
    return {};
  },
  methods: {
    update() {
      this.$emit('up', this.num)
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>