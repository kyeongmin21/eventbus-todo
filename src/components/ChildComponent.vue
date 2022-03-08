<template>
  <div>
    <div>
      {{ this.childValue }}
    </div>

    <button @click="updateParentValue">
      클릭시 부모의 데이터 값이 증가합니다.
    </button>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    childValue: {
      type: Number,
    },
  },
  data() {
    return {
      lll: this.childValue,
    };
  },
  methods: {
    updateParentValue() {
      this.lll = 1;
      this.$emit("childEvent", this.lll);
    },
  },
};
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>