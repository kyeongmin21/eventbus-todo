<template>
  <div class="parent">
    <h1>부모컨포넌트</h1>

    <section class="first">
      하위 컴포넌트에 데이터 값을 알려줍니다.
      <ChildComponent :childValue="parentValue" @childEvent="updateParentValue">
      </ChildComponent>
    </section>
  </div>
</template>

<script>
import ChildComponent from "@/components/ChildComponent";
export default {
  name: "Parent",
  components: {
    ChildComponent,
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

<style lang="scss" scoped>
h1 {
  color: #42b983;
}
section.first {
  border-top: 1px solid #333;
}
section {
  border-bottom: 1px solid #333;
  padding: 10px 0 20px 0;
}
.orange {
  color: orange;
}
</style>