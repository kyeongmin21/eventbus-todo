<template>
  <div>
    <h1>모달창 구현</h1>
    <b-button variant="outline-primary" @click="onClick">Modal</b-button>
    <ModalCompo v-model="modalShow"
                @statChange="onClick">

    </ModalCompo>
  </div>
</template>

<script>
import ModalCompo from "@/components/ModalCompo"

export default {
  name: "Modal",
  components: {
    ModalCompo
  },
  data () {
    return {
      modalShow: false
    }
  },
  methods: {
    onClick() {
      this.modalShow = !this.modalShow
      console.log('클릭', this.modalShow)
    }
  }
}
</script>