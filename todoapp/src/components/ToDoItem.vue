<template>
        <div class="todo-item">
                <strong>{{todo.title}}</strong>
        </div>
</template>

<script>
export default {
    name: "ToDoItem",
    props: {
        todo: String
        }
}
</script>

<style scoped>
.todo-item{
        padding: 10px;
        margin-bottom: 20px;
}
</style>