<template>
  <div>
    <h1>slot</h1>
    <section>
      <h3>기본 사용 예시</h3>
      <Button>slot content
      </Button>
      <!--<Button/>-->
    </section>

    <section>
      <h3>이름이 있는 슬롯</h3>
      <Button>
        <slot name="left"></slot>
        <slot name="right"></slot>
      </Button>
    </section>
  </div>
</template>

<script>
import Button from "@/components/Button"


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