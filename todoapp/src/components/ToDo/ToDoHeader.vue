<template>
  <div>
    <v-toolbar color="primary" dark flat>
      <v-icon>mdi-watch</v-icon>
      <v-toolbar-title>ToDo</v-toolbar-title>
      <v-spacer></v-spacer>
    <!-- <to-do-refresh class="ma-1"/> -->
      <v-dialog v-model="dialog" max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn  right shaped v-on="on"  color="black">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <ToDoAddItem @todo-newtask="addNewTask" :categories="Categories" />
      </v-dialog>
    </v-toolbar>
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout">{{ snackbar.msg }}</v-snackbar>
  </div>
</template>

<script>
import ToDoAddItem from "./ToDoAddItem.vue";


export default {
  name: "todo-header",
  components: { ToDoAddItem },
  data() {
    return {
      dialog: false,
      snackbar: { show: false, msg: "New Task Created!", timeout: 2000 }
    };
  },
  methods: {
    addNewTask(newToDo) {
      this.$store.dispatch("addNewTask", newToDo);
      this.snackbar.show = true;
      this.dialog = false;
    }
  },
  computed: {
    Categories() {
      return this.$store.getters.categoriesKeyValue;
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #616161;
  color: white;
}
</style>