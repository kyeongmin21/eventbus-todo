<template>
  <div>
    <h1>board</h1>
    <p>{{msg}}</p>
    <button @click="btn">버튼</button>
  </div>
</template>

<script>
export default {
  name: "Board",
  components: {},
  data() {
    return {
      msg:  '안녕하세요.'
    };
  },
  computed: {
    check() {
      return this.checked.join('')
    }
  },
  methods: {
    btn() {
      this.msg = '안녕히가세요'
    }
  }
};
</script>

<style>

</style>