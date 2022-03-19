<template>
  <div class="parent">
    <h1>부모컨포넌트</h1>

      하위 컴포넌트에 데이터 값을 알려줍니다.
      <ChildComponent :childValue="parentValue" @childEvent="updateParentValue">
      </ChildComponent>
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
    };
  },
  methods: {
    updateParentValue(value) {
      this.parentValue += 1;
      console.log(value);
    },
  },
};
</script>

<style>
@import "/css/style.css";
</style>