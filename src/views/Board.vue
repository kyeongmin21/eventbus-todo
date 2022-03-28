<template>
  <div>
    <h1>board</h1>
    <BoardChild :num="number"
                @up="update"
                :human="person">

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
      person: '김경민'
    };
  },
  methods: {
    update() {
      this.number += 1
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>