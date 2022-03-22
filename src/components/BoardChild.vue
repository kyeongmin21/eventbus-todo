<template>
  <div>
      <div>{{ num }}</div>
      <button @click="update"> 버튼 </button>
  </div>
</template>

<script>
export default {
  name: "BoardChild",
  props: {
    num: {
      type: Number
    }
  },
  data() {
    return {

    };
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