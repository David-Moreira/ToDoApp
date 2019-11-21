<template>
<div> 
  <ToDoAddItem @todo-newtask="addNewTask"/>
  <ToDoItem @del-todo="deleteToDo"
            @sel-todo="selectToDo"
            :key="todo.id" 
            v-for="todo in Todos" 
            :todo="todo"/>
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
        Todos: []
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
    const newID = Math.max(...this.Todos.map(x => x.id), 0)+1;
    newToDo.id = newID;
    this.Todos = [...this.Todos,newToDo];
  }

  }
}
</script>

<style scoped>

</style>
