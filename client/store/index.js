import Store from '../modules/store/store.js';
import {cpmStore} from "./cpm.js";
import {todoStore} from "./todo.js";

const state = {
    todo: todoStore.state,
    cpm: cpmStore.state,
};

export default new Store({
    state,
    actions: {
        ...todoStore.actions,
        ...cpmStore.actions,
    },
    mutations: {
        ...todoStore.mutations,
        ...cpmStore.mutations,
    },
    getters: {
        ...todoStore.getters,
        ...cpmStore.getters,
    }
});