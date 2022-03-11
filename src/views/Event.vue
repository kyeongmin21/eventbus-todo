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


      <p>{{ message.value }}</p>
      <p>{{ message.value.length }}</p>
      <p>{{ list[2] }}</p>
      <p>{{ list[idx] }}</p>
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
      message: {
        value: '고양이도 할 줄 아는 vue 는 거짓말이야!!!'
      },
      list: ['사과', '바나나', '딸기'],
      idx: 1
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