<template>
<div> 
  <ToDoItem v-bind:key="todo.id" v-for="todo in Todos" v-bind:todo="todo"/>
</div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue"

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
        } ]
    }
  }
}
</script>

<style scoped>

</style>
