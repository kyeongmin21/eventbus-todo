<template>
  <div>
    <h1>v-for</h1>
    <section>
      <p>v-for로 엘리먼트에 배열 매핑하기</p>
      <div v-for="(item, index) in array" :key="index">
        {{ index + 1 }} : {{ item.fruit }}
      </div>
    </section>

    <section>
      <p>v-for와 객체</p>
      <div v-for="(value, key, index) in object" :key="value">
        {{ value }}, {{ key }}, {{ index }}
      </div>
    </section>

    <section>
      <p>필터링 / 정렬 된 결과 표시하기</p>
      <li v-for="n in evenNumber" :key="n">{{ n }}</li>
    </section>

    <section>
      <p>todo list</p>
      <b-form @submit.prevent="addNewTodo">
        <b-input type="text" style="margin: 0 auto; display: inline"
               v-model="newTodoText"
               id="new-todo" class="col-5 text-center"
               placeholder="리스트를 적어주세요"/>
        <b-button variant="outline-primary">추가</b-button>
      </b-form>
      <br>
      <p v-for="(todo, index) in todos" :key="index">{{ todo.title }}
        <b-button variant="outline-primary" @click="remove(index)">삭제</b-button>
      </p>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['a', 'b', 'c'],
      array: [
        {fruit: 'apple'},
        {fruit: 'banana'},
        {fruit: 'mango'}
      ],
      object: {
        title: '제목',
        menu: '메뉴',
        button: '버튼'
      },

      number: [1, 2, 3, 4, 5],
      todos: [
        {id: 1, title: 'javascript'},
        {id: 2, title: 'vue.js'},
        {id: 3, title: 'react'}
      ],

      newTodoText: '',
      nextTodoId: 4,
    };
  },
  computed: {
    evenNumber() {
      return this.number.filter(n => n % 2 === 0)
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId += 1,
        title: this.newTodoText
      })
      this.newTodoText = ''
    },
    remove(index) {
      return this.todos.splice(index, 1)
    }
  },

};
</script>

<style>
@import "/css/style.css";
</style>