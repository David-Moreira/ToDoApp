<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-icon>mdi-watch</v-icon>
                <v-toolbar-title>ToDo</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
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
import ToDoApp from './components/ToDo/ToDoApp.vue'
export default {
  name: 'App',

  components: {
ToDoApp
  },

  data: () => ({
    //
  }),
};
</script>
