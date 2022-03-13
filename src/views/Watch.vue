<template>
  <div>
    <h1>Watch 속성</h1>
    <p>{{ message }}</p>
    <button @click="changeMessage">click</button>
    <p>{{ update }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕하세요',
      update: '네',
    };
  },
  methods: {
    changeMessage() {
      this.message = '안녕히가세요'
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal); // 안녕히가세요 , 안녕하세요
      this.update = '아니오'
    }
  },

};
</script>

<style>
@import "/css/style.css";
</style>