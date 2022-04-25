<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'min'
    };
  },
  beforeCreate() {
    console.log('beforeCreate', this.name)
  },
  created() {  // data 접근이 가능해짐, 서버에 요청을 보내서 응답을 받아 업데이트 해줄때 많이 쓰임
    console.log('created', this.name)
  },
  beforeMount() {
    console.log('beforeMount')
  },
  update() {
    console.log('업데이트')
  },
  mounted() {
    console.log('mounted')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style>
@import "/css/style.css";
</style>