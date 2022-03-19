<template>
  <div>
    <h1>props, emit</h1>
    <Emit title="타이틀입니다." :content="cont"></Emit>
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
      cont: '내용입니다.'
    };
  },
  methods: {

  },
};
</script>

<style>
@import "/css/style.css";
</style>