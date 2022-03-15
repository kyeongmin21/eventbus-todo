<template>
  <div class="ifMoon">
    <h1>v-if:조건부 렌더링</h1>

    <section class="first">
      <h3>v-if</h3>
      <p v-if="awesome">True일 때 보여짐</p>
      <p v-else>False일 때 보여짐</p>
      <button @click="toggleShow">버튼</button>
      <p class="orange">false일 때 : html 렌더링 안 됨</p>
    </section>
    <section>
      <div v-if="number === 1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div v-else-if="number === 2">숫자 2입니다.</div>
      <div v-else>3이상입니다.</div>
      <button @click="increaseNumber">Increase</button> {{ number }}
    </section>
    <section>
      <h3>v-show</h3>
      <p v-show="true">True</p>
      <p v-show="false">False</p>
      <p class="orange">
        v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다<br>
        상태가 true false 가 계속해서 한 화면에 반복되는 경우에는 v-if의 경우 해당 태그를 <br>
        그렸다가 지웠다 하기 때문에 v-show를 사용해 주는 것이 좋다!
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
      number: 1,
    };
  },
  methods: {
    toggleShow() {
      this.awesome = !this.awesome
    },
    increaseNumber() {
      this.number += 1
    }
  }
};
</script>

<style>
@import "/css/style.css";
</style>