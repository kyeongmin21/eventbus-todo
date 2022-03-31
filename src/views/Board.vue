<template>
  <div>
    <h1>board</h1>
    <input type="text" :text="text"> {{ text }}
  </div>
</template>

<script>
export default {
  name: "Board",
  components: {},
  data() {
    return {
      text: '',

    };
  },

  methods: {

  }
};
</script>

<style>

</style>