<template>
<div> 
      <v-expansion-panels accordion dark popout class="ToDoAddItem">
      <v-expansion-panel
      >
        <v-expansion-panel-header>Add New Task</v-expansion-panel-header>
        <v-expansion-panel-content>
            <ToDoAddItem  @todo-newtask="addNewTask" :categories="Categories"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  <v-card raised >
    <v-card-title>
      <ToDoCategory :categories="Categories" @category-change="filterTasks"/>
    </v-card-title>
    <ToDoItem @del-todo="deleteToDo"
            @sel-todo="selectToDo"
            :key="todo.id" 
            v-for="todo in Todos" 
            :todo="todo"/>
  </v-card>
</div>
</template>

<script>
import todosJson from '@/data/todos.json';
import categoriesJson from '@/data/categories.json';
import ToDoItem from "./ToDoItem.vue"
import ToDoAddItem from "./ToDoAddItem.vue"
import ToDoCategory from "./ToDoCategory.vue"

export default {
  name: 'ToDoApp',
  components: {ToDoItem, ToDoAddItem, ToDoCategory},
  props: {
    msg: String
  },
  data(){
    return {
        Todos: [],
        Categories: []
    }
  },
  created() {
    this.Todos = todosJson;
    this.Categories = categoriesJson.map(x=>  {return {value: x.id, text: x.name}});
  },
  methods:{
    selectToDo(id){
      let index = this.Todos.findIndex(x=> x.id == id);
      this.Todos[index].completed = !this.Todos[index].completed;
    },
    deleteToDo(id){
      if (confirm("Are you sure you would like to delete this task?"))
        this.Todos = this.Todos.filter(x=> x.id !== id);
    },
    addNewTask(newToDo){
      const newID = Math.max(...this.Todos.map(x => x.id), 0)+1;
      newToDo.id = newID;
      this.Todos = [...this.Todos,newToDo];
    },
    filterTasks(category){
      if (category > 0){
        this.Todos = todosJson.filter(x=> x.category == category);
      } else {
        this.Todos = todosJson;
      }
    }
  }
}
</script>

<style scoped>
.ToDoAddItem{
  margin-bottom: 15px;
}
</style>
