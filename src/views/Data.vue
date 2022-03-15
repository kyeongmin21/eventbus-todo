<template>
  <div>
    <h1>data / methods</h1>
    <section>
      <p>{{ name }} : {{ age }}</p>
      <p>{{ person.fullName}}이의 생일은 {{ person.birthday }}입니다.</p>
    </section>
    <section>
      <p>{{ nextYear() }}</p>
      <p>{{ hello('안녕하세요') }}</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '민',
      age: 20,
      person: {
        fullName: '경민',
        birthday: '1011'
      },

    };
  },
  methods: {
    nextYear() {
      return ` ${this.person.fullName}이는 내년에 ${ this.age + 1 }살 입니다.`
    },
    hello(say) {
      return say
    }
  }
};
</script>

<style>
@import "/css/style.css";
</style>