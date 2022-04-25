<template>
  <div>
    <b-modal v-model="modalShow"
             @hide="statChange"
             footer-class="justify-content-center"
             size="xl"
             no-close-on-backdrop
             no-close-on-esc
             centered
             scrollable>

      <div class="box">

      </div>

    </b-modal>
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
  created () {
    if (this.value) {
      this.modalShow = this.value
    }
  },
  data() {
    return {
      modalShow: this.value
    }
  },
  methods: {
    statChange() {
      this.$emit('statChange')
    }
  }
}
</script>

<style>
.box { width: 100px; height: 100px; background: #cccccc;}
</style>