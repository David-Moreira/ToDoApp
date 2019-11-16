<template>
<div>
        {{todo.id}}
        {{todo.title}}
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

<style>

</style>