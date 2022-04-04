<template>
  <div>
    <h1>Animation</h1>
    <section>
      <button @click="show = !show">Toggle 1</button>
      <transition name="fade">
        <div v-if="show">Toggle 1</div>
      </transition>
    </section>

    <section>
      <button @click="show2 = !show2">Toggle 2</button>
      <transition name="slide-fade">
        <div v-if="show2">Toggle 2</div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: true,
    };
  },
  methods: {
  },
  computed: {

  },

};
</script>

<style>
@import "/css/style.css";
.fade-enter-active, .fade-leave-active { transition: .5s; }
.fade-enter, .fade-leave-to { opacity: 0;}

.slide-fade-enter-active { transition: all .3s ease; }
.slide-fade-leave-active { transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); }
.slide-fade-enter, .slide-fade-leave-to { transform: translateX(10px); opacity: 0;}
</style>