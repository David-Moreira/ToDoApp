<template>
<v-card class="ma-2" shaped v-bind:color="todo.completed ? 'light-green' : 'dark lighten2' " >
        
        <v-card-title class=""  >
               <span v-bind:style="todo.completed ? 'textDecoration:line-through;' : 'textDecoration:none;'"> <strong>{{todo.title}}</strong></span>
                        <v-spacer/>
        <v-btn icon  shaped @click="$emit('del-todo', todo.id)" color="red" >
                <v-icon>mdi-delete-forever</v-icon>
        </v-btn>                
        <v-btn icon  shaped @click="$emit('sel-todo', todo.id)" v-bind:color="todo.completed ? 'light-green darken-4' : 'dark lighten2' " >
                <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
        </v-card-title>
        <v-card-subtitle>
                
                <span v-if="todo.dueDate">{{todo.dueDate}}</span>
        </v-card-subtitle>
</v-card>
</template>

<script>
export default {
    name: "ToDoItem",
    props: {
        todo: Object
        }
}
</script>

<style scoped>
.todo-item{
        padding: 10px;
        margin-bottom: 20px;
}
</style>