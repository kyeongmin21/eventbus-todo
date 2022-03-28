<template>
  <div class="parent">
    <h1>부모컨포넌트</h1>

      하위 컴포넌트에 데이터 값을 알려줍니다.
      <Child :childValue="parentValue"
             @childEvent="update"
              :text="study"
              @change="changeText"
      ></Child>
  </div>
</template>

<script>
import Child from "@/components/Child";
export default {
  name: "Parent",
  components: {
    Child,
  },
  data() {
    return {
      parentValue: 23,
      study: '합시다'
    };
  },
  methods: {
    update() {
      this.parentValue += 1;
      // console.log(value);
    },
    changeText(value) {
      this.study = value;
    }
  },
};
</script>

<style>
@import "/css/style.css";
</style>