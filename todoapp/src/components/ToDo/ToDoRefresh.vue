<template>
<v-btn  @click="refresh" shaped color="black">
    <v-icon>mdi-refresh</v-icon>
</v-btn>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"ToDoRefresh",
    methods: {
    ...mapActions([
      "loadTasks",
      "loadCategories"     
    ]),
    refresh(){
        this.loadTasks();
        this.loadCategories();
    }
}
}
</script>

<style>

</style>