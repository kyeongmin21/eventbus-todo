<template>
  <v-container>
    <v-layout row wrap>

      <v-flex xs6>
        {{ todoList }}
        <List/>
      </v-flex>

      <v-flex xs6>
        <listAdd @listAdd="listAdd"/>
      </v-flex>

    </v-layout>
  </v-container>
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
