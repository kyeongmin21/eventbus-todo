<template>
  <div class="parent">
    <h1>이벤트 핸들링</h1>

    <section class="first">
      <p>{{ year }}</p>
      <b-button variant="outline-primary" @click="plus">더하기</b-button>
      <b-button variant="outline-primary" @click="minus">빼기</b-button>
    </section>
    <section>
      <form @submit.prevent="submit">
        <input type="text">
        <b-button variant="outline-primary" type="submit">버튼</b-button>
        <p>@submit.prevent는 페이지 리로드 막는 이벤트</p>
      </form>
    </section>
    <section>
      <b-button variant="outline-primary" @click="show =! show">변경하기</b-button>
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
  }
}
</script>

<style>
@import "/css/style.css";
</style>