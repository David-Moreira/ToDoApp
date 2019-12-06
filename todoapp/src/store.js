import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebaseDB from './firebase.js';

const tasksCol = "tasks";
const categoriesCol = "categories";

export default new Vuex.Store({
    state: {
        categories: [],
        tasks: []
    },
    mutations: {
        loadCategories(state){
            let categories  = firebaseDB.read(categoriesCol)
            categories.then(x=> state.categories = x);
        },
        loadTasks(state){
            let tasks = firebaseDB.read(tasksCol)
            tasks.then(x=> state.tasks = x);
        },
        completeToDo(state, id) {
            let index = state.tasks.findIndex(x => x.id == id);
            state.tasks[index].completed = !state.tasks[index].completed;
            firebaseDB.update(tasksCol, state.tasks[index]);
        },
        deleteToDo(state, id) {
            state.tasks = state.tasks.filter(x => x.id !== id);
            firebaseDB. delete(tasksCol, id)
        },
        addNewTask(state, newToDo) {
            state.tasks = [...state.tasks, newToDo];
            let id = firebaseDB.write(tasksCol, newToDo);
            id.then(x=> newToDo.id = x)
        },
        filterTasks(state, category) {
            let tasks = firebaseDB.read(tasksCol);
            tasks.then(x=> state.tasks = x.filter(x => x.category == category));
        }
    },
    actions: {
        loadCategories(context){
            context.commit("loadCategories");
        },
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
            }).sort((x, y) => +(x.text > y.text) || +(x.text === y.text) -1 );
        }
    }
});

