<template>
  <div class="parent">
    <h1>페이지 이동시 보여지는 페이지</h1>
  </div>
</template>

<script>
export default {
  name: "Page",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
h1 {
  color: #42b983;
}
section.first {
  border-top: 1px solid #333;
}
section {
  border-bottom: 1px solid #333;
  padding: 10px 0 20px 0;
}
.orange {
  color: orange;
}
</style>