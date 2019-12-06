<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
            <ToDoHeader/>
              <v-card-text>
                <v-form @submit.prevent>
                  <ToDoApp/>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ToDoApp from "./components/ToDo/ToDoApp.vue";
import ToDoHeader from "./components/ToDo/ToDoHeader.vue"
export default {
  name: "App",

  components: {
    ToDoApp,
    ToDoHeader
  },

  data: () => ({
    
  })
};
</script>
