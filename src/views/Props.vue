<template>
  <div>
    <h1>props, emit</h1>
    <Emit></Emit>
  </div>
</template>

<script>
import Emit from "@/components/Emit";

export default {
  name: 'Compo',
  components: {
    Emit,
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