<template>          
<v-card ripple raised>
        <v-card-text>
            <v-row>
                    
            <v-col cols="12" >

                <v-text-field
                    @keyup.enter="AddNewTask" 
                    v-model="ToDo"
                    label="New Task"
                    clearable
                ></v-text-field>
            </v-col>
            <v-spacer/>
                <v-btn @click="AddNewTask"                      
                    color="primary"
                    small
                    absolute
                    bottom
                    right
                    icon>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-row>
        </v-card-text>
        </v-card>
</template>

<script>
export default {
name:"ToDoAddItem",
data() {return {
    ToDo:""
}},
methods:{
AddNewTask(e){
    e.preventDefault();
    const newToDo = {
        id: 999,
        title: this.ToDo,
        completed: false
    }
    this.ToDo = "";
    this.$emit('todo-newtask', newToDo);
}
    
}}
</script>

<style>

</style>