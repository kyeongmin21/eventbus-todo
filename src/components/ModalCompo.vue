<template>
  <div>
    <h1>모달title</h1>
    <p>모달 내용</p>
  </div>
</template>

<script>
export default {
  name: 'ModalCompo',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>