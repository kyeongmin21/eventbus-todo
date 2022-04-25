<template>
  <div>
    <br><br>
    <b-button variant="outline-primary" @click="onClick">Modal Button</b-button>
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
    }
  }
}
</script>