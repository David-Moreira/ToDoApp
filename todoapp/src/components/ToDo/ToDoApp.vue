<template>
<div> 
  <ToDoAddItem v-on:todo-newtask="addNewTask"/>
  <ToDoItem v-on:del-todo="deleteToDo"
            v-on:sel-todo="selectToDo"
            v-bind:key="todo.id" v-for="todo in Todos" v-bind:todo="todo"/>
</div>
</template>

<script>
import todosJson from '@/data/todos.json';
import ToDoItem from "./ToDoItem.vue"
import ToDoAddItem from "./ToDoAddItem.vue"

export default {
  name: 'ToDoApp',
  components: {ToDoItem, ToDoAddItem},
  props: {
    msg: String
  },
  data(){
    return {
        Todos: [ {
          id : 1,
          title : "Loading..."
        } ]
    }
  },
  created() {
    this.Todos = todosJson;
  },
  methods:{
  selectToDo(id){
    let index = this.Todos.findIndex(x=> x.id == id);
    this.Todos[index].completed = !this.Todos[index].completed;
  },
  deleteToDo(id){
    this.Todos = this.Todos.filter(x=> x.id !== id);
  },
  addNewTask(newToDo){
    this.Todos = [...this.Todos,newToDo];
  }

  }
}
</script>

<style scoped>

</style>
