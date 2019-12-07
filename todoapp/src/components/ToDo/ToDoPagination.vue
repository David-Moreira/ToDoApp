<template>
  <v-row style="margin:auto" v-if="total > 0" >
    <v-col cols="5" >
      <v-btn  class="float-right" :disabled="current == 1" icon   @click="goBack">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col align-self="center"  justify-self="center"> 
      <p class="text-center pa-0 ma-0"> Page: {{current}} of {{totalPages}}</p>
       

    </v-col>
    <v-col cols="5" >
      <v-btn class="float-left"  icon  :disabled="total / (current * numOfItems) <= 1" @click="goForward">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "todo-pagination",
  data() {
    return {
      current: 1,
      numOfItems: this.numItems,
    };
  },
  computed: {
      totalPages(){
          let total = Math.ceil(this.total / (this.numItems));
          return total;
      }
  },
  props: ["total", "numItems"],
  methods: {
    goBack() {
      this.current--;
      this.$emit("pageNum", this.current);
    },
    goForward() {
      this.current++;
      this.$emit("pageNum", this.current);
    }
  }
};
</script>

<style>
</style>