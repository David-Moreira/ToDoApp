import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import todosJson from "@/data/todos.json";
import categoriesJson from "@/data/categories.json";

export default new Vuex.Store({
    state: {
        categories: categoriesJson,
        tasks: todosJson
    },
    mutations: {
        completeToDo(state, id) {
            let index = state.tasks.findIndex(x => x.id == id);
            state.tasks[index].completed = !state.tasks[index].completed;
        },
        deleteToDo(state, id) {
            state.tasks = state.tasks.filter(x => x.id !== id);
        },
        addNewTask(state, newToDo) {
            const newID = Math.max(...state.tasks.map(x => x.id), 0) + 1;
            newToDo.id = newID;
            state.tasks = [...state.tasks, newToDo];
        },
        filterTasks(state, category) {
            if (category > 0) {
                state.tasks = state.tasks.filter(x => x.category == category);
            }
            else {
                state.tasks = todosJson;
            }
        }
    },
    actions: {
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

