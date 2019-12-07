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
        <ToDoCategory v-model="selectedCategory" clearable="true" :categories="Categories" @category-change="filterTasks" />
      </v-card-title>
      <ToDoItem
        @del-todo="deleteToDo"
        @sel-todo="completeToDo"
        :key="todo.id"
        v-for="todo in TodosPagination"
        :todo="todo"/>
      <ToDoPagination v-if="this.Todos.length>0" :numItems="numItems" :total="Todos.length" @pageNum="currentPage=$event-1"   />
      <div v-if="this.Todos.length==0"  class="mx-auto" max-width >
        <v-card-title >
          <span style="margin:auto;" > No Tasks... </span>
        </v-card-title>
      </div>
      <!-- <v-skeleton-loader v-if="this.Todos.length==0" class="mx-auto" max-width type="card"></v-skeleton-loader> -->

    </v-card>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import ToDoCategory from "./ToDoCategory.vue";
import ToDoPagination from "./ToDoPagination.vue";
import { mapActions } from 'vuex'

export default {
  name: "ToDoApp",
  data(){
    return {
      selectedCategory: null,
      currentPage: 0,
      numItems: 5
    }
  },
  components: { ToDoItem,ToDoCategory,ToDoPagination },
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
        TodosPagination(){
          let total = this.total(this.currentPage,this.numItems);
          return this.Todos.slice(total, total + this.numItems);
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
    },
    total(current, numItems){
      return (parseInt(current) || 0)  * (parseInt(numItems) || 0);
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
