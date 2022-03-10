<template>
  <div class="baseWrap" >
    <Header/>
    <div class="wrap">
      <Left/>
      <slot/>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Left from '@/components/Left'

  export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Left
  }
}
</script>
