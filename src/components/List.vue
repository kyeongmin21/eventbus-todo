<template>
  <div>
    <v-card class="pa-3 mb-5 mr-5"
            v-for="(list, idx) in todoList"
            :key="idx">
      <p>{{ list.memo}}</p>
      <v-btn fab text small color="green"><i class="fa-solid fa-check"></i></v-btn>
      <v-btn fab text small color="blue"><i class="fa-solid fa-rotate-right"></i></v-btn>
      <v-btn fab text small color="red"><i class="fa-solid fa-trash-can"></i></v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "List",
  props: [
    "todoList"
  ]
}
</script>

<style scoped>

</style>
