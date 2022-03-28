<template>
  <div>
    <h1>board</h1>
    <BoardChild :num="number" @up="update"></BoardChild>

    <section>
      <button @click="count">
        중복클릭 방지
      </button>
    </section>
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
      flag: false
    };
  },
  methods: {
    update() {
      this.number += 1
    },
    count() {
      if (!this.flag) {
        console.log('클릭')
        this.flag = true
      }
    }

  },
};
</script>

<style>
@import "/css/style.css";
</style>