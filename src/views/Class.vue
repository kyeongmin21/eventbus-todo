<template>
  <div class="ifMoon">
    <h1>클래스와 스타일 바인딩</h1>

    <section class="first">
      <h3>class : 객체구문</h3>
      <div v-bind:class="{ red: isRed, 'font-bold': isBold }">
        www.naver.com
      </div>
      <p><button @click="btnClick()">click</button></p>
    </section>

    <section>
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
  data() {
    return {
      isRed: false,
      isBold: false,
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
    btnClick() {
      this.isRed = !this.isRed;
      this.isBold = !this.isBold;
    },
  },
};
</script>

<style>
@import "/css/style.css";

</style>