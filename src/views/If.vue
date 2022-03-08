<template>
  <div class="ifMoon">
    <h1>v-if:조건부 렌더링</h1>

    <section class="first">
      <h3>v-if</h3>
      <p v-if="awesome">True일 때 보여짐</p>
      <p v-else>False일 때 보여짐</p>
      <p class="orange">false일 때 : html 렌더링 안 됨</p>
    </section>

    <section>
      <h3>v-show</h3>
      <p v-show="true">True</p>
      <p v-show="false">False</p>
      <p class="orange">
        v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
    };
  },
};
</script>

<style>

</style>