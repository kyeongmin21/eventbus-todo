<template>
  <div class="about">
    <div id="nav">
      <ul class="category">
        <li><h2><router-link to="/model">1. v-model</router-link></h2></li>
        <li><h2><router-link to="/if">2. v-if</router-link></h2></li>
        <li><h2><router-link to="/class">3. :class :style</router-link></h2></li>
        <li><h2><router-link to="/compo">4. component</router-link></h2></li>
        <li><h2><router-link to="/parent">5. parent</router-link></h2></li>
      </ul>
      <ul class="category">
        <li><h2><router-link to="/page" tag="a">6. 페이지 이동</router-link></h2></li>
        <li><h2><router-link to="/event" tag="a">7. 이벤트 핸들링</router-link></h2></li>
      </ul>
    </div>
  </div>
</template>
