<template>
  <div>
    <h1>props, emit</h1>
    <Emit title="타이틀입니다." :content="cont"></Emit>
    <form>
      <InputFiled :name="name" @update-name="update"></InputFiled>
<!--      <InputFiled :name="name" @update-name="name = $event.target.value"></InputFiled>-->
      <button>submit</button>
    </form>
    {{ name }}
  </div>
</template>

<script>
import Emit from "@/components/Emit";
import InputFiled from "@/components/InputField";
export default {
  name: 'Props',
  components: {
    Emit,
    InputFiled,
  },
  data() {
    return {
      cont: '내용입니다.',
      name: '',
    };
  },
  methods: {
    update(name) {
      this.name = name;
    }

  },
};
</script>

<style>
@import "/css/style.css";
</style>