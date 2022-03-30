<template>
  <div>
    <h1>board</h1>
    <BoardChild :num="number" @up="update"
                :human="person" @reverse="reverseName"
                :bool="trueFalse" @onOff="flag"
                :str="string" @pushEvent="push">
    </BoardChild>

    <div :style="[ activeClass, lineClass ]">www.naver.com</div>
  </div>
</template>

<script>
import BoardChild from "@/components/BoardChild";

export default {
  name: "Board",
  components: {
    BoardChild,
  },
  data() {
    return {
      number: 1,
      person: '김경민',
      trueFalse: true,
      string: '뷰공부',

      activeClass: {
        color: 'blue'
      },
      lineClass: {
        'text-decoration': 'underline'
      }
    };
  },
  methods: {
    update() {
      this.number += 1
    },
    reverseName(value) {
      this.person = value.split('').reverse().join('')
    },
    flag(value) {
      this.trueFalse = !value
    },
    push(value) {
      value = '뷰공부합니다.'
      this.string = value
    }
  },
};
</script>

<style>
@import "/css/style.css";

.active { color: red; }
.underLine { text-decoration: underline; }

.color { color: blue;}

</style>