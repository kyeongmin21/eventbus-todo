<template>
  <div>
    <h1>v-for</h1>
    <section>
      <h3>v-for로 엘리먼트에 배열 매핑하기</h3>
      <div v-for="(item, index) in array" :key="index">
       {{ index + 1}} : {{ item.fruit }}
      </div>
    </section>
    <section>
      <h3>v-for와 객체</h3>
      <div v-for="(value, key, index) in object" :key="value">
        {{ value }}, {{ key }}, {{ index }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        { fruit: 'apple' },
        { fruit: 'banana' },
        { fruit: 'mango' }
      ],
      object: {
        title: '제목',
        menu: '메뉴',
        button: '버튼'
      }
    };
  },
  methods: {

  },

};
</script>

<style>
@import "/css/style.css";
</style>