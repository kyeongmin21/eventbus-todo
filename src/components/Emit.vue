<template>
  <div>
      <h3>{{ title }}</h3>
      <p> {{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "Emit",
  props: {
    title: {
      type: String,
      required: true
    },
    content: String,
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