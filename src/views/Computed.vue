<template>
  <div>
    <h1>Computed 속성</h1>
    <button @click="changeMessage">click</button>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕하세요',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'kim kyeong min'
    }
  },
  computed: {
      reverseMessage() {
        return this.message.split('').reverse().join('')
      }
  }
};
</script>

<style>
@import "/css/style.css";
</style>