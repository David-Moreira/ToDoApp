<template>
<div class="md-layout md-gutter"> 
  <ToDoItem class="md-elevation-4 md-layout-item" v-bind:key="todo.id" v-for="todo in Todos" v-bind:todo="todo"/>
</div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue"
import axios from 'axios';

export default {
  name: 'ToDoApp',
  components: {ToDoItem},
  props: {
    msg: String
  },
  data(){
    return {
        Todos: [ {
          id : 1,
          title : "Test"
        },{
          id : 2,
          title : "Test_2"
        },
        {
          id : 3,
          title : "Test_4"
        } ]
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
          .then(res => this.Todos = res.data);
          
  }
}
</script>

<style scoped>

</style>
