<template>
  <v-row style="margin:auto" >
    <v-col >
      <v-btn  class="float-right" :disabled="current == 1" icon   @click="goBack">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col align-self="center" class="offset-lg-2"  justify-self="center"> 

        Page: {{current}} of {{totalPages}}

    </v-col>
    <v-col  >
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
          let total = Math.round(this.total / (this.numItems));
          return (total == 0 ? 1 : total)
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