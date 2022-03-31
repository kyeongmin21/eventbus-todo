<template>
  <div>
    <h1>board</h1>
    <a :href="getLink('kossiecoder')">유투브</a>
  </div>
</template>

<script>
export default {
  name: "Board",
  components: {},
  data() {
    return {
      link: 'https://www.naver.com',
      youtube: 'https://www.youtube.com/'
    };
  },

  methods: {
    getLink(name) {
      return this.youtube + name
    }
  }
};
</script>

<style>

</style>