<template>
  <v-select
  clearable
  v-model="selectVal"
  :items="categories"
  label="Category:"
  @change="$emit('category-change', selectVal)"
  ></v-select>
</template>

<script>
export default {
  name: "ToDo-Category",
  computed:{
    selectVal:{
      get(){
        return this.value;
      },
      set(value){
        this.value = value;
      }
    }
  },
  props: ["categories", "value"]
  ,
    watch: {
      selectVal(val) {
          this.$emit('input', val);
      }
  }
};
</script>

<style scoped>
</style>
