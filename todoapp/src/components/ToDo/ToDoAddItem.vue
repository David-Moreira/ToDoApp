<template>
<v-card class="ma2">
    <v-col cols="12" v-if="errors.length">
      <v-alert type="error">
      <b>Please correct the following error(s):</b>
      <ul>
        <li :key="error" v-for="error in errors">{{ error }}</li>
      </ul>
      </v-alert>
    </v-col>

    <v-col cols="12">
      <v-text-field @keyup.enter="AddNewTask" v-model="ToDo.name" label="New Task" clearable></v-text-field>
    </v-col>
    <v-col cols="12">
      <ToDo-Category
        :categories="categories"
        v-model="ToDo.category"
        
      ></ToDo-Category>
    </v-col>
    <v-col cols="12">
      <v-dialog ref="dialog" v-model="modal" persistent width="290px">
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="ToDo.date"
            label="Due Date"
            v-on="on"
            @focus="ToDo.date=''"
            clearable
          ></v-text-field>
        </template>
        <v-date-picker v-model="ToDo.date" scrollable @input="datePickerChange"></v-date-picker>
      </v-dialog>
    </v-col>
    <v-spacer />
    <v-col>
      <v-btn @click="AddNewTask" color="primary" small absolute bottom right icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-col>
</v-card>
</template>

<script>
import ToDoCategory from "./ToDoCategory.vue";
export default {
  name: "ToDoAddItem",
  components: { ToDoCategory },
  data() {
    return {
      ToDo: { name: "", dueDate: "", category: null },
      modal: false,
      errors: [],
      category: null
    };
  },
  props: ["categories", "value"],
  methods: {
    AddNewTask(e) {
      e.preventDefault();
      if (!this.Validation()) return;

      const newToDo = {
        id: 999,
        title: this.ToDo.name,
        category: this.ToDo.category,
        dueDate: this.ToDo.date,
        completed: false
      };
      this.$emit("todo-newtask", newToDo);
       this.$nextTick(() => {
       this.ToDo = {name: "",dueDate: "", category:null }
       });

    },
    Validation() {
      this.errors = [];
      if (this.ToDo.name.trim() == "") this.errors.push("Please insert a title!");
      if (this.ToDo.category == null) this.errors.push("Please insert a category!");
      return this.errors.length == 0;
    },
    datePickerChange(event) {
      this.modal = false;
      this.ToDo.date = event;
    }
  }
};
</script>

<style scoped>
</style>