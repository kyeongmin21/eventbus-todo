<template>
  <div class="updown">
    <ul>
      <li v-for="(item, idx) in fruits" :key="idx">
        <b-button type="button" variant="outline-primary" @click="move(fruits, idx, 'up')">위</b-button>
        <b-button type="button" variant="outline-primary" @click="move(fruits, idx, 'down')">아래</b-button>
        <span>{{ item.name }}</span>
        <b-button type="button" variant="outline-danger" @click="deleteBtn(idx)">X</b-button>
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
        {idx: 0, name: 'apple'},
        {idx: 1, name: 'banana'},
        {idx: 2, name: 'cherry'},
        {idx: 3, name: 'berry'}
      ]
    }
  },
  methods: {
    move (list, idx, text) {
      console.log(list)
      if (text === 'up' && idx > 0) {
        [list[idx], list[idx - 1]] = [list[idx - 1], list[idx]]
      }
      if (text === 'down' && idx < (list.length - 1)) {
        [list[idx], list[idx + 1]] = [list[idx + 1], list[idx]]
      }

      //Vue는 배열의 변화를 감지하여 DOM을 업데이트 할 수 있다.
      list.push()
    },
    deleteBtn (idx) {
      this.fruits.splice(idx, 1)
    }
  }
}
</script>

<style>
.updown ul li { margin-bottom: 10px; }
</style>