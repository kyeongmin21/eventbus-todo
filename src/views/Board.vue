<template>
  <div>
    <h1>board</h1>
    <HelloWorld ref="usernameInput"></HelloWorld>
    <b-button variant="outline-primary" @click="onClick">클릭</b-button>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld"
import Mixin from "@/mixin/mixin"

export default {
  name: "Board",
  mixins: [Mixin],
  components: {
    HelloWorld,
  },
  data() {
    return {
      age: 20
    }
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