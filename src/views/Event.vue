<template>
  <div class="parent">
    <h1>이벤트 핸들링</h1>

    <section class="first">
      <button @click="counter">버튼</button>
      <p>위 버튼을 클릭한 횟수는 {{ num}} 번 입니다.</p>
    </section>
  </div>
</template>

<script>

export default {
  name: "Event",
  components: {

  },
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    counter() {
      this.num += 1;
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>