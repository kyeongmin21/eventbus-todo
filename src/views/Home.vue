<template>
  <div class="todoWrap">
  <v-container>
    <v-layout class="pa-5" row wrap >
      <v-flex xs6>
        <List :todoList="todoList"/>
      </v-flex>

      <v-flex xs6>
        <listAdd @listAdd="listAdd"/>
      </v-flex>

    </v-layout>
  </v-container>
  </div>
</template>

<script>
import List from '@/components/List'
import ListAdd from '@/components/ListAdd'

export default {
  name: 'Home',
  components: {
    List,
    ListAdd
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    listAdd(memo) {
      this.todoList.push({memo: memo, status: 'created'})
    }
  }
}
</script>
<style>
.todoWrap { width: 100%; height: 100%; background-color: #e5e5e5; }
</style>
