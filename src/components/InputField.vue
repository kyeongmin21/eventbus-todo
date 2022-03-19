<template>
  <div>
    <label for="person">Name</label>
    <input id="person" type="text"
           :value="name"
            @input="updateName">
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