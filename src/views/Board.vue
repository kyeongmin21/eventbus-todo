<template>
  <div>
    <h1>board</h1>
    <HelloWorld ref="usernameInput"></HelloWorld>
    <button @click="onClick">클릭</button>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "Board",
  components: {HelloWorld},
  data() {
    return {
    };
  },
  methods: {
    onClick() {
      const el = this.$refs.usernameInput.$el
      this.$refs.usernameInput.focus()
      console.log('Parents!', el)
    }
  }
};
</script>

<style>

</style>