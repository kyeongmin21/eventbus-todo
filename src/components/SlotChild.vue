<template>
  <div>
    <h3>Slot Child</h3>

    <section>
      <p>header</p>
      <slot name="header"></slot>
      <p>body</p>
      <slot name="body"></slot>
      <p>footer</p>
      <slot name="footer"></slot>
    </section>

  </div>
</template>

<script>
export default {
  name: 'SlotChild',
}
</script>

<style>

</style>
