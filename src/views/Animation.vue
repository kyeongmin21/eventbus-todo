<template>
  <div>
    <section>
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
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
</style>