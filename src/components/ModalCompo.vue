<template>
  <div>
    <b-modal id="ModalCompo"
             v-model="modalShow"
             @hide="statChange"
             footer-class="justify-content-center"
             size="md"
             no-close-on-backdrop
             no-close-on-esc
             centered
             scrollable>

      <template #modal-header="{ close }">
        <h5 class="modal-title">header</h5>
        <button type="button" class="close" @click="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </template>

      <template>
        <p>내용</p>
      </template>

      <template #modal-footer="{ ok, cancel, hide }">
        <b-button size="sm" variant="success" @click="ok()">확인</b-button>
        <b-button size="sm" variant="danger" @click="cancel()">취소</b-button>
        <b-button size="sm" variant="danger" @click="hide()">숨김</b-button>
      </template>

    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalCompo',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      modalShow: this.value
    }
  },
  watch: {
    value (newVal) {
      this.modalShow = newVal
    },
  },
  methods: {
    statChange () {
      this.$emit('statChange')
    }
  }
}
</script>