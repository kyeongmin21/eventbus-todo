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

    <section>
      <button @click="show3 = !show3">Toggle 3</button>
      <transition name="bounce">
        <div v-if="show3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris facilisis enim libero, at lacinia diam fermentum id.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris facilisis enim libero, at lacinia diam fermentum id.</div>
      </transition>
    </section>

    <section>
      <div id="staggered-list-demo">
        <input v-model="query">
        <transition-group name="staggered-fade"
          tag="ul"
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave">
          <li v-for="(item, index) in computedList"
              :key="item.msg"
              :data-index="index">
            {{ item.msg }}
          </li>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show2: true,
      show3: true,
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

.bounce-enter-active { animation: bounce-in .5s; }
.bounce-leave-active { animation: bounce-in .5s reverse; }
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
}
</style>