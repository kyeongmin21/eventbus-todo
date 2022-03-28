<template>
  <div>
    <div>{{ num }}</div>
    <button @click="update"> 버튼</button>
    <br><br>
    <div>{{ human }}</div>
    <button @click="reverseName">버튼</button>
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
    },
    reverseName() {
      this.$emit('reverse', this.human)
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>