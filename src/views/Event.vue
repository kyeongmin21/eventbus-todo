<template>
  <div class="parent">
    <h1>이벤트 핸들링</h1>

    <section class="first">
      <p>{{ year }}</p>
      <button @click="plus">더하기</button>
      <button @click="minus">빼기</button>
    </section>
    <section>
      <form @submit.prevent="submit">
        <input type="text">
        <button type="submit">버튼</button>
        <p>@submit.prevent는 페이지 리로드 막는 이벤트</p>
      </form>
    </section>
    <section>
      <button @click="show =! show">변경하기</button>
      <transition>
        <p v-if="show">Hello Vue.js!</p>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  name: "Event",
  components: {},
  data() {
    return {
      year: 2022,
      show: true,

    };
  },
  methods: {
    plus() {
      this.year += 1;
    },
    minus() {
      this.year -= 1;
    },
    submit() {
      alert(`전송되었습니다`)
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>