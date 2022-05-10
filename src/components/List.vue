<template>
  <div>
    <v-card class="pa-3 mb-5 mr-5"
            :class="{'done': list.status === 'done'}"
            v-for="(list, idx) in todoList"
            :key="idx">
      <p>{{ list.memo }}</p>

      <v-btn fab text small color="green"
             v-if="list.status === 'created'"
             @click="$emit('statusControl', idx, 'done')">
        <i class="fa-solid fa-check"></i>
      </v-btn><!-- 완료 -->

      <v-btn fab text small color="blue"
             v-else
             @click="$emit('statusControl', idx, 'created')">
        <i class="fa-solid fa-rotate-right"></i>
      </v-btn><!-- 부활 -->

      <v-btn fab text small color="red"
             @click="$emit('listDelete', idx)">
        <i class="fa-solid fa-trash-can"></i>
      </v-btn><!-- 제거 -->

      <v-btn fab text small color="yellow"
             v-if="list.status === 'created'">
        <i class="fas fa-edit"></i>
      </v-btn><!-- 편집 -->
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
.done {
  background-color: rgba(0, 0, 0, 0.1);
}

.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
</style>
