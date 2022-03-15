<template>
  <div>
    <h1>v-bind</h1>
    <section>
      <input :type="inputType"><br>
      <input :value="inputValue">
    </section>

    <section>
      <a :href="link">네이버</a><br>
      <a :href="getLink('kossiecoder')">코지코더 유튜브채널</a>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputType: 'number',
      inputValue: 'hello',
      link: 'https://www.naver.com',
      youtube: 'https://www.youtube.com/',
    };
  },
  methods: {
    getLink(channel) {
      return this.youtube + channel
    }
  }
};
</script>

<style>
@import "/css/style.css";
</style>