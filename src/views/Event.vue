<template>
  <div class="parent">
    <h1>이벤트 핸들링</h1>

    <section class="first">
      <button @click="counter">버튼</button>
      <p>위 버튼을 클릭한 횟수는 {{ num }} 번 입니다.</p>

      <button v-on:click="show =! show">변경하기</button>
      <transition>
        <p v-if="show">Hello Vue.js!</p>
      </transition>

      <p>{{ message.value }}</p>
      <p>{{ message.value.length }}</p>
      <p>{{ list[2] }}</p>
      <p>{{ list[idx] }}</p>
    </section>
    <section>
      <button @click="isActive=!isActive">isActive 변경하기</button>
      <p class="item" :class="{ 'is-active': isActive }" >동적 클랙스</p>
      <p class="item" :style="{ color: textColor, backgroundColor: bgColor }" >동적 스타일</p>

      <button @click="isPerson = !isPerson">isPerson 변경하기</button>
      <p class="name" :class="{ person: isPerson }">민경김</p>
      <p class="name" :style="{ fontSize: size, fontWeight: weight}">김경민</p>
    </section>
  </div>
</template>

<script>

export default {
  name: "Event",
  components: {},
  data() {
    return {
      num: 0,
      show: true,
      message: {
        value: '고양이도 할 줄 아는 vue 는 거짓말이야!!!'
      },
      list: ['사과', '바나나', '딸기'],
      idx: 1,
      isChild: true,
      isActive: true,
      textColor: 'blue',
      bgColor: 'lightgray',
      size: '30px',
      weight: '600',
      isPerson: false,
    };
  },
  methods: {
    counter() {
      this.num += 1;
    },

  },
};
</script>

<style scoped>
@import "/css/style.css";
.v-enter-active, .v-leave-active { transition: opacity 1s; }
.v-enter, .v-leave-to { opacity: 0; }

.item { transition: background-color 1s; padding: 4px 8px; } /* class에 걸어줌 */
.is-active { background: #ffeaea;}

.name { transition: color 1s; } /* class에 걸어줌 */
.person { color: #42b983; }

</style>