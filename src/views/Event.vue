<template>
  <div class="parent">
    <h1>이벤트 핸들링</h1>

    <section class="first">
      <button @click="counter">버튼</button>
      <p>위 버튼을 클릭한 횟수는 {{ num }} 번 입니다.</p>

      <button v-on:click="show =! show">변경하기</button>
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
      num: 0,
      show: true,
    };
  },
  methods: {
    counter() {
      this.num += 1;
    },

  },
};
</script>

<style scoped>
@import "/css/style.css";

.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>