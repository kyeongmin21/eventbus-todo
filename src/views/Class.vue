<template>
  <div class="ifMoon">
    <h1>클래스와 스타일 바인딩</h1>

    <section class="first">
      <h3>class : 객체구문</h3>
      <div v-bind:class="{ red: isRed, 'font-bold': isBold }">
        www.naver.com
      </div>
      <p>
        <button @click="btnClick()">click</button>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRed: false,
      isBold: false,
    };
  },
  methods: {
    btnClick() {
      this.isRed = !this.isRed;
      this.isBold = !this.isBold;
    },
  },
};
</script>

<style>
</style>