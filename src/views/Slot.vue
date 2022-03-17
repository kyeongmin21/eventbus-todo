<template>
  <div>
    <h1>slot</h1>
    <section>
      <h3>기본 사용 예시</h3>
      <Button>slot content</Button>
      <!--<Button/>-->
    </section>

    <section>
      <h3>이름이 있는 슬롯</h3>
      <Button>
        <template v-slot:header>
          <p>헤더 Slot</p>
        </template>
        <template v-slot:body>
          <p>바디 Slot</p>
        </template>
        <template v-slot:footer>
          <p>푸터 Slot</p>
        </template>
      </Button>

    </section>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
export default {
  data() {
    return {
    };
  },
  components: {
    Button,
  },
};
</script>

<style>
@import "/css/style.css";
</style>