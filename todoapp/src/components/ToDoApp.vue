<template>
<div> 
  <ToDoAddItem v-on:todo-newtask="addNewTask"/>
  <ToDoItem v-on:sel-todo="selectToDo" v-bind:key="todo.id" v-for="todo in Todos" v-bind:todo="todo"/>
</div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue"
import ToDoAddItem from "./ToDoAddItem.vue"
import axios from 'axios';

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
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
          .then(res => this.Todos = res.data);
          
  },
  methods:{
  selectToDo(id){
    let index = this.Todos.findIndex(x=> x.id == id);
    this.Todos[index].completed = !this.Todos[index].completed;
  },
  addNewTask(newToDo){
    this.Todos = [...this.Todos,newToDo];
  }

  }
}
</script>

<style scoped>

</style>
