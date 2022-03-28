<template>
  <div>
    <h1>board</h1>
    <BoardChild :num="number" @up="update"></BoardChild>

    <section>
      <button @click="dbClickPrevent">중복클릭 방지</button><br>
      <button @click.once="onlyOne">중복클릭 방지2</button><br>
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
      dbClick: false,
    };
  },
  methods: {
    update() {
      this.number += 1
    },
    dbClickPrevent() {
      if (!this.dbClick) {
        console.log('클릭')
        this.dbClick = true
      }
    },
    onlyOne(){
      console.log('클릭2')
    },


  },
};
</script>

<style>
@import "/css/style.css";
</style>