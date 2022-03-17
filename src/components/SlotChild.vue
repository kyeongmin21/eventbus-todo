<template>
  <div>
    <h3>---아래 영역 Slot Child---</h3>
    <p>header</p>
    <slot name="header"></slot>
    <p>body</p>
    <slot name="body"></slot>
    <p>footer</p>
    <slot name="footer"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
}
</script>

<style>

</style>
