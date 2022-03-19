<template>
  <div>
      <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Emit",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style>
@import "/css/style.css";
</style>