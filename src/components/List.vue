<template>
  <div>
    <v-card class="pa-3 mb-5 mr-5"
            v-for="(list, idx) in todoList"
            :key="idx">
      <p>{{ list.memo}}</p>
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
