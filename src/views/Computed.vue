<template>
  <div>
    <h1>Computed 속성</h1>
    <button @click="changeMessage">click</button>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMessage }}</p>

    <div>
      <p v-if="typeof number.num1">{{ number.num1 }}</p>
      <p v-if="number.num2 && !number.num3 && !number.num4">>{{ number.num2 }}</p>
      <p v-if="!number.num2 && number.num3 && !number.num4">>{{ number.num3 }}</p>
      <p v-if="!number.num2 && !number.num3 && number.num4">>{{ number.num4 }}</p>
      <p v-if="!number.num1 && !number.num2 && !number.num3 && !number.num4">{{ number.other }}</p>
    </div>
    <hr>
    <div>
      <p>{{ test }}</p>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      number: {
        num1: 0,
        num2: '',
        num3: '',
        num4: '',
        other: '해당없음'
      },
     result: '',
      message: '안녕하세요',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'kim kyeong min'
    }
  },
  computed: {
    test() {
      const print = []
      for (const i in this.number) {
        print.push(this.number[i])
      }
      return print.join('')
    },
      reverseMessage() {
        return this.message.split('').reverse().join('')
      }
  }
};
</script>

<style>
@import "/css/style.css";
</style>