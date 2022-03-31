<template>
  <div>
    <h1>v-bind</h1>
    <section>
      <p><input :type="inputType"></p>
      <input :value="inputValue"><br>
      <img :src="site" alt="이미지">
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
      site: "https://t1.daumcdn.net/cfile/blog/2119CF4157F6360D2F"
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