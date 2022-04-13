<template>
  <div>
    <h1>table 바인딩</h1>
    <b-form-input v-model="text" placeholder="Enter your name">
    </b-form-input>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data() {
    return {
      text: ''
    };
  },
  methods: {},
  computed: {},

};
</script>

<style>
@import "/css/style.css";
</style>