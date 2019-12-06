import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import categoriesJson from "@/data/categories.json";
import firebaseDB from './firebase.js';

const tasksCol = "tasks";

export default new Vuex.Store({
    state: {
        categories: categoriesJson,
        tasks: []
    },
    mutations: {
        loadTasks(state){
            let tasks = firebaseDB.read(tasksCol)
            tasks.then(x=> state.tasks = x);
        },
        completeToDo(state, id) {
            let index = state.tasks.findIndex(x => x.id == id);
            state.tasks[index].completed = !state.tasks[index].completed;
        },
        deleteToDo(state, id) {
            state.tasks = state.tasks.filter(x => x.id !== id);
        },
        addNewTask(state, newToDo) {
            state.tasks = [...state.tasks, newToDo];
            let id = firebaseDB.write(tasksCol, newToDo);
            id.then(x=> newToDo.id = x)
        },
        filterTasks(state, category) {
            if (category > 0) {
                state.tasks = state.tasks.filter(x => x.category == category);
            }
            else {
                let tasks = firebaseDB.read(tasksCol)
                tasks.then(x=> state.tasks = x);
            }
        }
    },
    actions: {
        loadTasks(context){
            context.commit("loadTasks");
        },
        completeToDo(context, id) {
            context.commit("completeToDo", id);
        },
        deleteToDo(context, id) {
            context.commit("deleteToDo", id);
        },
        addNewTask(context, newToDo) {
            context.commit("addNewTask", newToDo);
        },
        filterTasks(context, category) {
            context.commit("filterTasks", category);
        }
    },
    getters: {
        categoriesKeyValue(state) {
            return state.categories.map(x => {
                return { value: x.id, text: x.name };
            });
        }
    }
});

