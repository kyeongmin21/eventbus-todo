<template>
  <div class="updown">
    <ul>
      <li v-for="(item, idx) in fruits" :key="idx">
        <b-button type="button" variant="outline-primary" @click="move">위</b-button>
        <b-button type="button" variant="outline-primary" @click="move">아래</b-button>
        <span>{{ item.name }}</span>
        <b-button type="button" variant="outline-danger" @click="deleteBtn">X</b-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UpDown",
  data () {
    return {
      fruits: [
        {idx: 1, name: 'apple'},
        {idx: 2, name: 'banana'},
        {idx: 3, name: 'cherry'}
      ]
    }
  },
  methods: {
    move () {
      console.log('move')
    },
    deleteBtn () {

    }
  }
}
</script>

<style>
.updown ul li { margin-bottom: 10px; }
</style>