<template>
  <div>
    <h1>data / methods</h1>
    <section>
      <p>{{ name }} : {{ age }}</p>
      <p>{{ person.fullName}}이의 생일은 {{ person.birthday }}입니다.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '민',
      age: '20',
      person: {
        fullName: '경민',
        birthday: '1011'
      }
    };
  },
};
</script>

<style>
@import "/css/style.css";
</style>