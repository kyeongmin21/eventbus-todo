<template>
  <div>
    <h1>Watch 속성</h1>
    <section>
      <p>{{ message }}</p>
      <b-button variant="outline-primary" @click="changeMessage">click</b-button>
      <p>{{ update }}</p>
    </section>

    <section>
      <h3>금지어</h3>
      <textarea v-model="text" maxlength="140"></textarea>
    </section>

    <section>
      <p>{{ msg }}</p>
      <p>{{ reversedMsg }}</p>
    </section>

    <section>
      <p>value = {{ value }}</p>
      <p>changeValue = {{ changeValue }}</p>
      <b-button variant="outline-primary" @click="change">변경</b-button>
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
      msg: 'Hello Vue!',
      value: 0,
      changeValue: '',
    };
  },
  methods: {
    changeMessage() {
      this.message = '안녕히가세요'
    },
    change() {
      this.value += 1
    }
  },
  computed: {
    reversedMsg: {
      get() {
        return this.msg.split('').reverse().join('')
      },
      set(newMsg) {
        this.msg = newMsg
      }
    }
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal); // 안녕히가세요 , 안녕하세요
      this.update = '아니오'
    },
    text(newVal) {
      let check = newVal.indexOf(this.forbiddenText);
      if (check >= 0) {
        this.text = newVal.replace(this.forbiddenText, '');
        alert(`${this.forbiddenText} 는 입력할 수 없습니다.`)
      }
    },
    msg(newMsg) {
      // data -> msg 데이터가 변경될 때 실행
      console.log('1', `new data는 ${newMsg}`)
    },
    reversedMsg(newMsg) {
      // computed -> msgReversed 데이터가 변경될 때 실행
      console.log(`new reversed는 ${newMsg}`)
    },
    value() {
      this.changeValue = this.value
    }
  }
}
</script>

<style>
@import "/css/style.css";
</style>