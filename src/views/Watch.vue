<template>
  <div>
    <h1>Watch 속성</h1>
    <section>
      <p>{{ message }}</p>
      <button @click="changeMessage">click</button>
      <p>{{ update }}</p>
    </section>

    <section>
      <h3>금지어</h3>
      <textarea v-model="text" maxlength="140"></textarea>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕하세요',
      update: '네',
      forbiddenText: '멍청이',
      text: '',
    };
  },
  methods: {
    changeMessage() {
      this.message = '안녕히가세요'
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal); // 안녕히가세요 , 안녕하세요
      this.update = '아니오'
    },

    text(newVal) {
      let check = newVal.indexOf(this.forbiddenText);
      console.log('check', check >= 0)
      if (check >= 0) {
        this.text = newVal.replace(this.forbiddenText, '');
        alert(`${this.forbiddenText} 는 입력할 수 없습니다.`)
      }
    }
  },

};
</script>

<style>
@import "/css/style.css";
</style>