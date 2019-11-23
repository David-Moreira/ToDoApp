<template>
<v-select
            v-model="select"
            :items="categories"
            label="Category:"
            @change="$emit('category-change',select)"
          >
          </v-select>
</template>

<script>
export default {
    name: "ToDo-Category",
    data(){

        return {
            select: 0
        }
    }
   , props: 
    {
        categories: Array
    }
}
</script>

<style scoped>

</style>
