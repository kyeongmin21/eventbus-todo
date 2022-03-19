<template>
  <div>
    <label for="person">Name</label>
    <input id="person" type="text"
           :value="name"
            @input="updateName">
<!--    <input id="person" type="text"
           :value="name"
           @input="$emit('update-name', $event)">-->
  </div>
</template>

<script>
export default {
  name: "InputFiled",
  props: {
    name: {
      type: String,
      required: true,
    }
  },
  methods: {
    updateName(e) {
      console.log(e.target.value)
      this.$emit('update-name', e.target.value)
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>