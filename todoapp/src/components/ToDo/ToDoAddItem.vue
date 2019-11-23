<template>          
<div>
            <v-row>
                 <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li :key="error" v-for="error in errors">{{ error }}</li>
    </ul>
  </p>     
            <v-col cols="12" >

                <v-text-field
                    @keyup.enter="AddNewTask" 
                    v-model="ToDo.name"
                    label="New Task"
                    clearable
                ></v-text-field>
            </v-col>
                <v-col cols="12">
                    <ToDo-Category
                        :categories="categories.filter(x=> x.value>0)"
                        @category-change="ToDo.category = $event"
                    >

                </ToDo-Category>
            </v-col>
             <v-spacer/>
            <v-col>           
                <v-btn @click="AddNewTask"                      
                    color="primary"
                    small
                    absolute
                    bottom
                    right
                    icon
                    >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col>

            </v-row>
   </div>
</template>

<script>
 import ToDoCategory from "./ToDoCategory.vue"
export default {
name:"ToDoAddItem",
components: {ToDoCategory},
data() {return {
    ToDo: {name: "", category: 0},

    errors: []

}},
props: {
categories: Array

},
methods:{
AddNewTask(e){
    e.preventDefault();
    if (!this.Validation()) return;

    const newToDo = {
        id: 999,
        title: this.ToDo.name,
        category: this.ToDo.category,
        completed: false
    }
    this.ToDo.name = "";
    this.ToDo.category = 0;
    this.$emit('todo-newtask', newToDo);
},
Validation(){
    this.errors = [];
    if (this.ToDo.name == "")
        this.errors.push("Please insert a task!")
    if (this.ToDo.category < 1)
        this.errors.push("Please select a category!")
    return this.errors.length == 0
}
    
}}
</script>

<style>

</style>