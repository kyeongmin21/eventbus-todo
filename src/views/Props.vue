<template>
  <div>
    <h1>props, emit</h1>
    <Emit title="타이틀입니다."></Emit>
  </div>
</template>

<script>
import Emit from "@/components/Emit";

export default {
  name: 'Props',
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