<template>
  <div class="model">
    <h1 class="test">v-model:양방향 바인딩</h1>

    <section class="first">
      <h3>문자열</h3>
      <input type="text" v-model="message" />
      <span>메세지 : {{ message }}</span>
    </section>

    <section>
      <h3>체크박스 : 하나의 체크박스는 단일 boolean 값을 가진다.</h3>
      <input type="checkbox" id="check" v-model="checked" />
      <label for="check">{{ checked }}</label>
    </section>

    <section>
      <h3>여러개의 체크박스 : 같은 배열을 바인딩 할 수 있다.</h3>
      <input type="checkbox" id="kim" value="Kim2" v-model="checkedNames" />
      <label for="kim">Kim</label>
      <input type="checkbox" id="kyeong" value="Kyeong2" v-model="checkedNames"/>
      <label for="kyeong">Kyeong</label>
      <input type="checkbox" id="min" value="Min2" v-model="checkedNames" />
      <label for="min">Min</label>
      <p>선택 : {{ checkedNames }}</p>
      <p>선택2: {{ check }}</p>

      <p class="orange">input 안의 value값이 나오게 됨</p>
    </section>

    <section>
      <h3>라디오</h3>
      <input type="radio" id="one" value="one1" v-model="picked" />
      <label for="one">One</label>
      <input type="radio" id="two" value="two2" v-model="picked" />
      <label for="two">Two</label>
      <p>선택 : {{ picked }}</p>
    </section>

    <section>
      <h3>코지코더 v-bind와 v-on을 통해 양방향</h3>
      <form @submit.prevent="submit">
        <input type="text" :value="text" @keyup="updateText"><br>
        {{ text }}<br>
        <button type="submit">버튼이에오</button>
      </form>
    </section>

    <section>
      <h3>인코딩 디코딩</h3>
        <input type="text" v-model="memo"><br>
        <input readonly :value="encode">
        <button type="submit" @click="encoding">인코딩 버튼</button> <br>
        <input readonly :value="decode">
        <button type="submit" @click="decoding">디코딩 버튼</button>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: false,
      checkedNames: [],
      picked: "",
      text: '',
      memo: '',
      encode: '',
      decode: '',
    };
  },
  computed: {
    check() {
      return this.checkedNames.join('')
    }
  },
  methods: {
    submit() {
      console.log('hello');
    },
    updateText(event) {
      this.text = event.target.value
    },
    encoding() {
      this.encode = window.btoa(encodeURIComponent(this.memo))
    },
    decoding() {
      this.decode = decodeURIComponent(window.atob(this.memo))
    },
  }
};
</script>

<style>
@import "/css/style.css";
</style>