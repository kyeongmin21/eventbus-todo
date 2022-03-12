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
    </section>

    <section>
      <p :class="{ hidden: isHidden}">클래스 바인딩 - 객체</p>
      <p :class="[activeClass, errorClass]">클래스 바인딩 - 배열</p>

      <p :style="{color: textColor, backgroundColor: bgColor }">스타일 바인딩 - 객체</p>
      <div :style="[baseStyles, overridingStyles]">스타일 바인딩 - 배열</div>
    </section>


    <section>
      <h2>예제</h2>
      <button @click="isActive=!isActive">isActive 변경하기</button>
      <p class="item" :class="{ 'is-active': isActive }" >동적 클랙스</p>
      <p class="item" :style="{ color: textColor, backgroundColor: bgColor }" >동적 스타일</p>

      <button @click="isColor = !isColor">클릭하면 이름바뀐다</button>
      <p class="name" :class="{ color: isColor}">김경민</p>
      <p class="name" :style="{ fontSize: size, fontWeight: weight }">민경김</p>
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
      isChild: true,
      isActive: true,
      textColor: 'blue',
      bgColor: 'lightgray',
      size: '30px',
      weight: 600,
      isColor: false,
      isHidden: true,

      activeClass: 'active',
      errorClass: 'text-danger',

      baseStyles: {
        color: 'red'
      },
      overridingStyles: {
        fontSize: '30px',
        fontWeight: '700'
      }
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
.name { transition: color 1s; }
.color { color: blue;  }
</style>