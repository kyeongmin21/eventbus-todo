<template>
  <div>
    <h1>board</h1>
    <BoardChild :num="number"
                @up="update"
                :human="person"
                @reverse="reverseName"
                :bool="ttff"
                @onoff="flag">

    </BoardChild>
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
      ttff: true
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
      this.ttff = !value
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>