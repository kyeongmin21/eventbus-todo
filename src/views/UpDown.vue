<template>
  <div>
    <ul>
      <li>
        <b-button type="button" variant="outline-primary" @click="move">위</b-button>
        <b-button type="button" variant="outline-primary" @click="move">아래</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UpDown",
  data () {
    return {
    }
  },
  methods: {
    move () {
      console.log('move')
    }
  }
}
</script>