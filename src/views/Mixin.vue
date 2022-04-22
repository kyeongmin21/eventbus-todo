<template>
  <div>
    <p>{{ age }}</p>
  </div>
</template>

<script>
import Mixin from "@/mixin/mixin"

export default {
  name: "mixin",
  mixins: [Mixin],
  data() {
    return {
      age: 20
    }
  },
};
</script>