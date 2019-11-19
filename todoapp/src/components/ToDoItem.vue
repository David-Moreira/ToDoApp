<template>
<v-card class="ma-2" shaped v-bind:color="todo.completed ? 'light-green' : 'dark lighten2' " >
        <v-card-title class="pa-2"  >
               <span v-bind:style="todo.completed ? 'textDecoration:line-through;' : 'textDecoration:none;'"> <strong>{{todo.title}}</strong></span>
                        <v-spacer/>
                        
        <v-btn icon shaped @click="$emit('sel-todo', todo.id)" v-bind:color="todo.completed ? 'light-green darken-4' : 'dark lighten2' " >
                <v-icon>mdi-checkbox-marked-circle</v-icon>
        </v-btn>
        </v-card-title>

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