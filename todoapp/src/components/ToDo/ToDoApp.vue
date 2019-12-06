<template>
  <div>
    <!-- <v-expansion-panels v-model="addTaskPanelState" accordion dark popout class="p-bottom">
      <v-expansion-panel>
        <v-expansion-panel-header>Add New Task</v-expansion-panel-header>
        <v-expansion-panel-content>
          <ToDoAddItem @todo-newtask="addNewTask" :categories="Categories"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>-->
    <v-card raised class="p-bottom">
      <v-card-title>
        <ToDoCategory :categories="Categories" @category-change="filterTasks" />
      </v-card-title>
      <ToDoItem
        @del-todo="deleteToDo"
        @sel-todo="completeToDo"
        :key="todo.id"
        v-for="todo in Todos"
        :todo="todo"
      />
      <v-skeleton-loader v-if="this.Todos.length==0" class="mx-auto" max-width type="card"></v-skeleton-loader>

    </v-card>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import ToDoCategory from "./ToDoCategory.vue";
import { mapActions } from 'vuex'

export default {
  name: "ToDoApp",
  components: { ToDoItem,ToDoCategory },
  props: {
    msg: String
  },
  mounted () {
    this.loadTasks();
    this.loadCategories();
  },
  computed: {
      Todos(){ 
          return this.$store.state.tasks;
        },
      Categories(){ return this.$store.getters.categoriesKeyValue;},
  },
  methods: {
    ...mapActions([
      "completeToDo",
      "filterTasks",
      "loadTasks",
      "loadCategories"     
    ]),
    deleteToDo(id) {
      if (confirm("Are you sure you would like to delete this task?"))
        this.$store.dispatch("deleteToDo", id);
    }
  }
};
</script>

<style scoped>
.p-bottom {
  padding-bottom: 15px;
}
.m-bottom {
  margin-bottom: 15px;
}
</style>
