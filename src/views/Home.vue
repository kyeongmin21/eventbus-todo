<template>
  <div class="todoWrap">
    <v-container>
      <v-flex xs12 text-center>
        <h1>Todo List</h1>
        <p>전체할일 : {{ todoList.length }} / 완료된 할일 : {{ countDone }} / 남은 할일 : {{ todoList.length - countDone }}</p>
      </v-flex>

      <v-layout class="pa-5" row wrap>
        <v-flex xs6>
          <List :todoList="todoList"
                @statusControl="statusControl"
                @listDelete="listDelete"/>
        </v-flex>

        <v-flex xs6>
          <listAdd @listAdd="listAdd"
                   @listEdit="listEdit"/>
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
  computed: {
    countDone() {
      let count = 0
      this.todoList.forEach(list => {
        if (list.status === 'done') {
          count += 1
        }
      })
      return count
    }
  },
  methods: {
    listAdd(memo) {
      this.todoList.push({memo: memo, status: 'created'})
    },
    statusControl(idx, status) {
      this.todoList[idx].status = status
    },
    listDelete(idx) {
      this.todoList.splice(idx, 1)
    },
    listEdit(memo, idx) {
      this.todoList[idx].memo = memo
    }
  }
}
</script>

<style>
  .todoWrap {
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
  }
</style>
